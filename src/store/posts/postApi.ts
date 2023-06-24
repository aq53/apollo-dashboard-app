// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from "../../types/User";
import {Post} from "../../types/Post";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: (name) => "posts",
            providesTags: [{type: 'Posts', id: 'LIST'}]
        }),
        getPostByUserId: builder.query<Post[], string>({
            query: (id: string) => `posts?userId=${id}`,
            providesTags: [{type: 'Posts', id: 'LIST'}]
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPostByUserIdQuery, useGetPostsQuery} = postApi
