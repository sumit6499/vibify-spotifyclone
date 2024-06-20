import { createSlice } from "@reduxjs/toolkit";

export interface State{
  activeSong:string,
  isPlaying:boolean,
  url:string,
  artist:{
    image:string,
    artistName:string,
  }
}

const initialState = {
  activeSong: "baby",
  isPlaying: false,
  url:"",
  artist: {
    image: "",
    artistName: "",
  },
};

export const PlayerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlaySong: (state:State, action) => {
      state.activeSong = action.payload.song;
      state.url = action.payload.url;
      state.artist.image = action.payload.image;
      state.artist.artistName = action.payload.artistName;
    },

    togglePlayPause: (state:State, action) => {
      state.isPlaying = action.payload.songStatus;
    },
  },
});
export const { addPlaySong, togglePlayPause } = PlayerSlice.actions;
export default PlayerSlice.reducer;
