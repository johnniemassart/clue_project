import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userDetails = createAsyncThunk(
  "user/postDetails",
  async (user) => {
    const response = await axios.post("http://127.0.0.1:8000/users/", user);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { username: "", password: "", character: "" },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        (state.pending = true), (state.error = false);
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
      })
      .addCase(userDetails.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectUser = (state) => state.user.userInfo;
export default userSlice.reducer;
