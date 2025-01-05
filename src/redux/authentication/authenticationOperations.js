import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  clearAuthenticationHeader,
  setAuthenticationHeader,
} from "../constants";

export const register = createAsyncThunk(
  "authenticatation/register",
  async (credentials, thunkApi) => {
    console.log(credentials);
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
  "authenticatation/logIn",
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
  "authenticatation/logOut",
  async (_, thunkApi) => {
    try {
      await axios.post("users/logout");
      clearAuthenticationHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
