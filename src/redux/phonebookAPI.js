import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers) => {
    const token = axios.defaults.headers.common.Authorization
    if (token) {
      headers.set('authorization', `${token}`)
    }
    return headers
  },
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({

    // Only token
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    // Token and object with name and number
    addContact: builder.mutation({
      query: (values) => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    
    // Token and id
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