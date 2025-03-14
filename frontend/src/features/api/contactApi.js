import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/contact",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (formData) => ({
        url: "/create",
        method: "POST",
        body: formData,
      }),
      providesTags: ["Contact"],
    }),
    getMessages: builder.query({
      query: () => ({
        url: "/messages",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
  }),
});

export const { useSubmitContactFormMutation, useGetMessagesQuery } = contactApi;
