import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/appointment",
  }),
  tagTypes: ["Appointment"],
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (appointment) => ({
        url: "/create",
        method: "POST",
        body: appointment,
      }),
      invalidatesTags: ["Appointment"],
    }),
    getAppointments: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
  }),
});

// Exporting only the hooks
export const { useCreateAppointmentMutation, useGetAppointmentsQuery } =
  appointmentApi;
export default appointmentApi;
