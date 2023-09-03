import { IBreed } from '@/providers/models/IBreed';
import { IFavourite } from '@/providers/models/IFavourite';
import { IVote } from '@/providers/models/IVote';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PhotoType {
  breedId: string;
  limit: string;
}

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('x-api-key', process.env.NEXT_PUBLIC_API_KEY as string);
      return headers;
    },
  }),
  tagTypes: ['Vote', 'Favourite'],
  endpoints: builder => ({
    getBreeds: builder.query<IBreed[], string>({
      query: (limit = '') => `breeds?${limit && `limit=${limit}`}`,
    }),
    getPhotos: builder.query<IBreed[], PhotoType>({
      query: ({ breedId, limit }) => `/images/search?${breedId && `breed_ids=${breedId}`}&limit=${limit}`,
      providesTags: result => ['Vote'],
    }),
    getVotes: builder.query({
      query: (limit = '') => `/votes?limit=${limit}&order=DESC`,
      providesTags: result => ['Vote'],
    }),
    uploadPhoto: builder.mutation({
      query: photo => ({
        url: 'images/upload',
        method: 'POST',
        body: photo,
      }),
    }),
    addVote: builder.mutation<IVote>({
      query: body => ({
        url: '/votes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Vote'],
    }),
    getFavourites: builder.query<IFavourite>({
      query: ({ limit, sub_id, order }) => `/favourites?limit=${limit}&sub_id=${sub_id}&order=${order}`,
      providesTags: result => ['Favourite'],
    }),
    addFavourite: builder.mutation<IFavourite>({
      query: body => ({
        url: '/favourites',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Favourite'],
    }),
    deleteFavourite: builder.mutation<IFavourite>({
      query: id => ({
        url: `/favourites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favourite'],
    }),
  }),
});

//https://api.thecatapi.com/v1/images/search?breed_ids=aege&limit=8

export const {
  useGetBreedsQuery,
  useUploadPhotoMutation,
  useGetPhotosQuery,
  useGetVotesQuery,
  useAddVoteMutation,
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
} = breedsApi;
