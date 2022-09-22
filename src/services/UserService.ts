import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICreateContact, IUpdateContact, IUser } from '@src/store/reducers/UserSlice'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Users'],
  endpoints: build => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: '/users',
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['Users'],
    }),
    createUser: build.mutation<ICreateContact, ICreateContact>({
      query: contact => ({
        url: '/users',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: build.mutation<IUpdateContact, IUpdateContact>({
      query: contact => ({
        url: `/users/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: build.mutation<number, number>({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})
