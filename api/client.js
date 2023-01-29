import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;

// This app not have login or user auth, only auth the strapi api access
export const methods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

export const tagTypes = {
  events: 'Events',
  types: 'Types',
};

const fetchBase = retry(
  fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${process.env.NEXT_PUBLIC_BEARER_STRAPI}`);
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  { maxRetries: 0 }
);

const fetchWithAuth = async (args, queryApi, extraOptions) => {
  const result = await fetchBase(args, queryApi, extraOptions);
  if (result.error?.status) {
    retry.fail(result.error);
  }
  return result;
};

export const cacheListUpdate = (
  dispatch,
  endpointName,
  item,
  method,
  args,
  id = '',
  field = 'id',
  withItems = true
) => {
  if (withItems) {
    return dispatch(
      api.util.updateQueryData(endpointName, args, (cache) => {
        if (method === methods.put) {
          cache.items = cache.items.map((cacheItem) => {
            if (cacheItem[field] === id) {
              return Object.assign(cacheItem, item);
            }
            return cacheItem;
          });
        }
        if (method === methods.post) {
          cache.items.push(item);
        }
        if (method === methods.delete) {
          cache.items = cache.items.filter((cacheItem) => cacheItem[field] !== id);
        }
      })
    );
  }
  return dispatch(
    api.util.updateQueryData(endpointName, args, (cache) => {
      if (method === methods.put) {
        cache.map((cacheItem) => {
          if (cacheItem[field] === id) {
            return Object.assign(cacheItem, item);
          }
          return cacheItem;
        });
      }
      if (method === methods.post) {
        cache.push(item);
      }
      if (method === methods.delete) {
        cache = cache.filter((cacheItem) => cacheItem[field] !== id);
      }
    })
  );
};

export const cacheUpdate = (dispatch, endpointName, item, args) =>
  dispatch(
    api.util.updateQueryData(endpointName, args, (cache) => {
      Object.assign(cache, item);
    })
  );

export const selectInvalidatedQuery = (endpointName, tag, getState) => {
  const invalidatedQueries = api.util.selectInvalidatedBy(getState(), [tag]);
  return invalidatedQueries.find(
    (invalidatedQuery) => invalidatedQuery.endpointName === endpointName
  );
};

export const pessimisticUpdate = async (
  endpointName,
  tag,
  { dispatch, queryFulfilled, getState },
  item,
  method,
  listArgs
) => {
  const invalidatedQuery = selectInvalidatedQuery(endpointName, tag, getState);
  try {
    const { data } = await queryFulfilled;
    let newCache = item ?? data;
    if (method === methods.post && !newCache.id) {
      newCache = {
        ...newCache,
        id: data?.id,
      };
    }
    if (listArgs) {
      cacheListUpdate(
        dispatch,
        endpointName,
        newCache,
        method,
        invalidatedQuery?.originalArgs,
        listArgs?.id || newCache?.id,
        listArgs?.field,
        listArgs?.withItems
      );
    } else {
      cacheUpdate(dispatch, endpointName, newCache, invalidatedQuery?.originalArgs);
    }
  } catch (err) {
    throw `Error updating cache for endpoint ${endpointName} with arguments: ${
      JSON.stringify(invalidatedQuery?.originalArgs) ?? 'no args'
    }.
		Method: ${method}. Error: ${JSON.stringify(err)}`;
  }
};

export const optimisticUpdate = async (
  endpointName,
  tag,
  { dispatch, queryFulfilled, getState },
  item,
  method = methods.put,
  listArgs
) => {
  const invalidatedQuery = selectInvalidatedQuery(endpointName, tag, getState);
  const updateResult = listArgs
    ? cacheListUpdate(
        dispatch,
        endpointName,
        item,
        method,
        invalidatedQuery?.originalArgs,
        listArgs?.id || item?.id,
        listArgs?.field,
        listArgs?.withItems
      )
    : cacheUpdate(dispatch, endpointName, item, invalidatedQuery?.originalArgs);
  await queryFulfilled.catch(updateResult?.undo);
};

export function provideListTag(type, result) {
  const listTag = { type, id: 'LIST' };
  return result ? [...result.map(({ id }) => ({ type, id })), listTag] : [listTag];
}

export const api = createApi({
  baseQuery: fetchWithAuth,
  refetchOnReconnect: true,
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});
