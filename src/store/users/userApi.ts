// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from "../../types/User";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    tagTypes: ['Users', 'UserDetail'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: (name) => "users",
            providesTags: [{type: 'Users', id: 'LIST'}]
        }),
        getUserDetail: builder.query<User, string>({
            query: (id: string) => `users/${id}`,
            providesTags: [{type: 'UserDetail'}]
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUsersQuery, useGetUserDetailQuery} = userApi
