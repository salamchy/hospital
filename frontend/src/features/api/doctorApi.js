import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/doctors",
  }),
  tagTypes: ["Doctor"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/all",
      providesTags: ["Doctor"],
    }),
    createDoctor: builder.mutation({
      query: (formData) => ({
        url: "/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Doctor"],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useCreateDoctorMutation,
  useDeleteDoctorMutation,
} = doctorApi;
export default doctorApi;
