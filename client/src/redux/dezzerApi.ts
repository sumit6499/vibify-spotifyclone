import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootObject } from "../types/dazzerApiInterface";

export const dazzerMusicApi = createApi({
  reducerPath: "dazzerMusiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deezerdevs-deezer.p.rapidapi.com/",
    prepareHeaders: (header) => {
      header.set(
        "X-RapidAPI-Key",
        "c2b79c58e4msh3968e44fb8aa7f6p197afcjsnf5d90927aa43"
      );
      header.set("X-RapidAPI-Host", "deezerdevs-deezer.p.rapidapi.com");
      return header;
    },
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query<RootObject,string>({
      query: (q) => `search?q=${q}`,
    }),
  }),
});

export const { useGetAllSongsQuery } = dazzerMusicApi;
