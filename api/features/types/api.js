import qs from 'qs';
import { api, provideListTag, tagTypes } from '../../client';

export const typesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      query: () => `types`,
      providesTags: (result) => provideListTag(tagTypes.types, result?.items),
    }),
    getAllEventsByType: builder.query({
      query: (slug) => {
        const params = qs.stringify(
          { filters: { slug: { $eq: slug } }, populate: ['events'] },
          {
            encodeValuesOnly: true, // prettify URL
          }
        );

        return `types?${params}`;
      },
      providesTags: (result) => provideListTag(tagTypes.types, result?.items),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllTypesQuery, useGetAllEventsByTypeQuery } = typesApi;
