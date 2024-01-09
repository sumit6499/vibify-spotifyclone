import { configureStore } from "@reduxjs/toolkit";
import { dazzerMusicApi } from "./dezzerApi";
import playerReducers from "./musicApiSlice";

export const store = configureStore({
  reducer: {
    [dazzerMusicApi.reducerPath]: dazzerMusicApi.reducer,
    players: playerReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dazzerMusicApi.middleware),
});
