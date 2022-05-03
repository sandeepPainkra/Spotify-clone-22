import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    token: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { setAccessToken } = musicSlice.actions;

export const selectToken = (state) => state.music.token;

export default musicSlice.reducer;
