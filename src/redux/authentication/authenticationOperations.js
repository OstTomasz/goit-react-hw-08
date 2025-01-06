import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  clearAuthenticationHeader,
  setAuthenticationHeader,
} from "../constants";

export const register = createAsyncThunk(
  "authentication/register",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthenticationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "authentication/logIn",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthenticationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "authentication/logOut",
  async (_, thunkApi) => {
    try {
      await axios.post("users/logout");
      clearAuthenticationHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "authentication/refreshUser",
  async (_, thunkApi) => {
    try {
      const persistToken = thunkApi.getState().authentication.token;
      if (!persistToken) {
        return thunkApi.rejectWithValue("No token");
      }
      setAuthenticationHeader(persistToken);

      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   "authentication/updateUser",
//   async (updatedUser, thunkApi) => {
