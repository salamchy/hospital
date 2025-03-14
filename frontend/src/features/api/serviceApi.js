import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001/api/service" }),
  tagTypes: ["service"],
  endpoints: (builder) => ({
    // Get all services
    getServices: builder.query({
      query: () => "/",
      providesTags: ["service"], // This will trigger cache updates when services are added/deleted
      transformResponse: (response) => {
        // Ensure that response.data is an array
        return Array.isArray(response.data) ? response.data : [];
      },
    }),

    // Add a service
    addService: builder.mutation({
      query: (newService) => ({
        url: "/add",
        method: "POST",
        body: newService,
      }),
      // Invalidates cache so the data is refreshed automatically
      invalidatesTags: ["service"],
    }),

    // Delete a service by ID
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      // Invalidates cache to refresh the list after deletion
      invalidatesTags: ["service"],
    }),

    // Get a single service by ID
    getServiceById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useGetServiceByIdQuery,
} = serviceApi;
