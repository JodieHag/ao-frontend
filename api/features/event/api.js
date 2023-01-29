import qs from 'qs';
import { api, methods, provideListTag, tagTypes } from '../../client';

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => ({
        url: 'events',
        params: { sort: ['sightingDate'], populate: ['type'] },
      }),
      providesTags: (result) => provideListTag(tagTypes.events, result?.items),
    }),
    getEventsByLocation: builder.query({
      query: ({ lat1, lat2, long1, long2 }) => {
        const params = qs.stringify(
          {
            populate: ['type'],
            filters: {
              $and: [
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
      // Invalidates all Event-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: tagTypes.events, id: 'LIST' }],
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
