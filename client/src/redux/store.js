import { configureStore } from "@reduxjs/toolkit";
import { dazzerMusicApi } from "./dezzerApi";
import playerReducers from "./musicApiSlice";
import authReducers from './authSlice'

export const store = configureStore({
  reducer: {
    [dazzerMusicApi.reducerPath]: dazzerMusicApi.reducer,
    players: playerReducers,
    auth: authReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dazzerMusicApi.middleware),
});
