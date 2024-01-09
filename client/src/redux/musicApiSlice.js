import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSong: "baby",
  isPlaying: false,
  artist: {
    image: "",
    artistName: "",
  },
};

export const PlayerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlaySong: (state, action) => {
      state.activeSong = action.payload.song;
      state.url = action.payload.url;
      state.artist.image = action.payload.image;
      state.artist.artistName = action.payload.artistName;
    },
  },
});
export const { addPlaySong } = PlayerSlice.actions;
export default PlayerSlice.reducer;
