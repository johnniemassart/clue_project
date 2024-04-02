import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { authApi } from "./AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
