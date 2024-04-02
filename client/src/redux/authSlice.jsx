import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  character: "",
  refresh: "",
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
          refresh: action.payload.refresh,
          access: action.payload.access,
        })
      );
      state.username = action.payload.username;
      state.character = action.payload.character;
      state.refresh = action.payload.refresh;
      state.access = action.payload.access;
    },
    logout: (state) => {
      localStorage.clear();
      state.username = "";
      state.character = "";
      state.refresh = "";
      state.access = "";
    },
  },
});

export const selectAuth = (state) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
