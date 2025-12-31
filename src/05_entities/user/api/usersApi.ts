import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../model/types";

const BASE_URL = import.meta.env.VITE_USER_API_URL;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = api;
