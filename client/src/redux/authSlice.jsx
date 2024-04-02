import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  character: "",
  access: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: action.payload.username,
          character: action.payload.character,
          access: action.payload.access,
        })
      );
      state.username = action.payload.username;
      state.character = action.payload.character;
      state.access = action.payload.access;
    },
  },
});

export const selectAuth = (state) => state.auth;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
