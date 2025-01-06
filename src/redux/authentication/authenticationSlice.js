import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
} from "./authenticationOperations";

const initialState = {
  isLoggedIn: false,
  isRefreshUser: false,
  token: null,
  user: { name: null, email: null },
  isLoading: false,
  registerError: null,
  logInError: null,
  logOutError: null,
  refreshError: null,
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, actions) => {
        state.isLoading = false;
        state.registerError = actions.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.logInError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, (state, actions) => {
        state.isLoading = false;
        state.logInError = actions.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.logOutError = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.logOutError = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logOut.rejected, (state, actions) => {
        state.isLoading = false;
        state.logOutError = actions.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshUser = true;
        state.refreshError = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshUser = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state, actions) => {
        state.isRefreshUser = false;
        state.isLoading = false;
        state.refreshError = actions.payload;
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      });
  },
});

export const authenticationReducer = authenticationSlice.reducer;
