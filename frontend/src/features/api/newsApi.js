import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/news",
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "/all",
      providesTags: ["News"],
    }),
    getNewsById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["News"],
    }),
    createNews: builder.mutation({
      query: (formData) => ({
        url: "/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),
    likeNews: builder.mutation({
      query: (id) => ({
        url: `/${id}/like`,
        method: "PUT",
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

// Export hooks for usage
export const {
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useLikeNewsMutation,
} = newsApi;

export default newsApi;
