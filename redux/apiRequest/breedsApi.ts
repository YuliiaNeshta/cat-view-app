import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface Breed {
//   id: string;
//   name: string;
//   // ... другие поля
// }
//
// interface Photo {
//   id: string;
//   url: string;
//   // ... другие поля
// }
//
// export const breedsApi = createApi({
//   reducerPath: 'breedsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.thecatapi.com/v1/',
//     prepareHeaders: (headers, { getState }) => {
//       headers.set('x-api-key', process.env.API_KEY as string);
//       return headers;
//     },
//   }),
//   endpoints: builder => ({
//     getBreeds: builder.query<Breed[], string>({
//       query: (limit = '') => `breeds?${limit && `limit=${limit}`}`,
//     }),
//     getPhotos: builder.query<Photo[], { breedId: string; limit?: string }>({
//       query: ({ breedId = '', limit = '' }) => `/images/search?breed_ids=${breedId}&limit=${limit}`,
//     }),
//     uploadPhoto: builder.mutation<void, FormData>({
//       query: body => ({
//         url: 'images/upload',
//         method: 'POST',
//         body,
//       }),
//     }),
//   }),
// });
//
// export const { useGetBreedsQuery, useUploadPhotoMutation, useGetPhotosQuery } = breedsApi;
//
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('x-api-key', 'live_ODue7PFE7tXtCH4aqqkRwDrVcivLCOgrbtqiEyu256McIZBAg7qfbyX2yRXd42mH');
      return headers;
    },
  }),
  endpoints: builder => ({
    getBreeds: builder.query({
      query: (limit = '') => `breeds?${limit && `limit=${limit}`}`,
    }),
    getPhotos: builder.query({
      query: ({ breedId, limit }) => `/images/search?breed_ids=${breedId}&limit=${limit}`,
    }),
    getVotes: builder.query({
      query: ({ order, limit }) => `/votes`,
    }),
    uploadPhoto: builder.mutation({
      query: body => ({
        url: 'images/upload',
        method: 'POST',
        body,
      }),
    }),
    addVote: builder.mutation({
      query: body => ({
        url: '/votes',
        method: 'POST',
        body,
      }),
    }),
  }),
});

//https://api.thecatapi.com/v1/images/search?breed_ids=aege&limit=8

export const { useGetBreedsQuery, useUploadPhotoMutation, useGetPhotosQuery } = breedsApi;
