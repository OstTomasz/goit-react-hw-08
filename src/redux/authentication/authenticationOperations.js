import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  BASE_URL2,
  clearAuthenticationHeader,
  setAuthenticationHeader,
} from "../constants";

axios.defaults.baseURL = BASE_URL2;

export const logIn = createAsyncThunk(
  "authenticatation/logIn",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("users/login", credentials);
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
