import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICreateContact, IUpdateContact, IUser } from '@src/store/reducers/UserSlice'
export interface IRegistrationUserDto {
  name: string
  phone: string
  login: string
  password: string
}
export interface IAdmin {
  name: string
  phone: string
  login: string
  password: string
  id: number
}

export interface IAddTokenDto {
  token: string
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    registration: build.mutation<IRegistrationUserDto, IRegistrationUserDto>({
      query: user => ({
        url: '/adminDataBase',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    addTokenToDB: build.mutation<IAddTokenDto, IAddTokenDto>({
      query: token => ({
        url: '/tokens',
        method: 'POST',
        body: token,
      }),
      invalidatesTags: ['Auth'],
    }),
    getAdminByLogin: build.query<IAdmin[], string>({
      query: login => ({
        url: `/adminDataBase?login=${login}`,
        method: 'GET',
      }),

      providesTags: ['Auth'],
    }),
  }),
  // createUser: build.mutation<ICreateContact, ICreateContact>({
  //   query: contact => ({
  //     url: '/users',
  //     method: 'POST',
  //     body: contact,
  //   }),
  //   invalidatesTags: ['Auth'],
  // }),
  // updateUser: build.mutation<IUpdateContact, IUpdateContact>({
  //   query: contact => ({
  //     url: `/users/${contact.id}`,
  //     method: 'PUT',
  //     body: contact,
  //   }),
  //   invalidatesTags: ['Auth'],
  // }),
  // deleteUser: build.mutation<number, number>({
  //   query: id => ({
  //     url: `/users/${id}`,
  //     method: 'DELETE',
  //   }),
  //   invalidatesTags: ['Auth'],
  // }),
})
