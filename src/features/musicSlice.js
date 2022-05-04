import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    token: null,
    playlists: [],
    item: null,
    user: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload.token;
    },
    getUser: (state, action) => {
      state.user = action.payload.user;
    },
    getPlaylists: (state, action) => {
      state.playlists = action.payload.playlists;
    },
  },
});

export const { setAccessToken, getUser, getPlaylists } = musicSlice.actions;

export const selectToken = (state) => state.music.token;
export const selectUser = (state) => state.music.user;
export const selectPlaylists = (state) => state.music.playlists;

export default musicSlice.reducer;
