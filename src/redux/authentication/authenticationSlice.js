import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
} from "./authenticationOperations";
import { handlePending, handleRejected } from "../constants";

const initialState = {
  isLoggedIn: false,
  isRefreshUser: false,
  token: null,
  user: { name: null, email: null },
  isLoading: false,
  error: null,
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRefreshUser = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state, actions) => {
        state.isRefreshUser = false;
        state.isLoading = false;
        state.error = actions.payload;
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
