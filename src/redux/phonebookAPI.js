import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63b29c4f5e490925c51cb487.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: (values) => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = phonebookApi