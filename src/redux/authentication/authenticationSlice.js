import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  user: { name: null, email: null },
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {},
});

export const authenticationReducer = authenticationSlice.reducer;
