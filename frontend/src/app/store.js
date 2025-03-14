import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slice/authSlice";
import { userApi } from "../features/api/userApi";
import appointmentApi from "../features/api/appointmentApi";
import { contactApi } from "../features/api/contactApi";
import doctorApi from "../features/api/doctorApi";
import newsApi from "../features/api/newsApi";
import { serviceApi } from "../features/api/serviceApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      appointmentApi.middleware,
      contactApi.middleware,
      doctorApi.middleware,
      newsApi.middleware,
      serviceApi.middleware
    ),
});

export const selectAuth = (state) => state.auth;
