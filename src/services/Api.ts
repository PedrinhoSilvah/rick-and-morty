import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiResponse } from "Pages/Home";

const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiResponse, void>({
      query: () => "character",
    }),
    getEpisode: builder.query<ApiResponse, void>({
      query: () => "episode",
    }),
  }),
});

export const { useGetCharactersQuery, useGetEpisodeQuery } = Api;

export default Api;
