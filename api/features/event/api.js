import qs from 'qs';
import { api, methods, provideListTag, tagTypes } from '../../client';

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => {
        const params = qs.stringify(
          {
            sort: ['sightingDate'],
            populate: ['type', 'medias'],
            filters: {
              $and: [
                {
                  state: {
                    id: {
                      $in: [2],
                    },
                  },
                },
              ],
            },
          },
          {
            encodeValuesOnly: true, // prettify URL
          }
        );
        return {
          url: `events?${params}`,
        };
      },
      providesTags: (result) => provideListTag(tagTypes.events, result?.items),
    }),
    getEventsByLocation: builder.query({
      query: ({ lat1, lat2, long1, long2 }) => {
        const params = qs.stringify(
          {
            populate: ['type', 'medias'],
            filters: {
              $and: [
                {
                  state: {
                    id: {
                      $in: [2],
                    },
                  },
                },
                {
                  latitude: {
                    $gte: lat1,
                    $lte: lat2,
                  },
                },
                {
                  longitude: {
                    $gte: long1,
                    $lte: long2,
                  },
                },
              ],
            },
          },
          {
            encodeValuesOnly: true, // prettify URL
          }
        );
        return {
          url: `events?${params}`,
        };
      },
      providesTags: (result) => provideListTag(tagTypes.events, result?.items),
    }),
    getEvent: builder.query({
      query: ({ slug }) => ({
        url: 'events/',
        params: { filters: { slug }, populate: '*' },
      }),
      providesTags: (result, error, id) => [{ type: tagTypes.events, id }],
    }),
    addEvent: builder.mutation({
      query(body) {
        return {
          url: `events`,
          method: methods.post,
          body,
        };
      },
      providesTags: (result, error, id) => [{ type: tagTypes.events, id }],
      // Invalidates all Event-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created event could show up in any lists.
      // invalidatesTags: [{ type: tagTypes.events, id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllEventsQuery,
  useGetEventsByLocationQuery,
  useGetEventQuery,
  useAddEventMutation,
} = eventApi;
