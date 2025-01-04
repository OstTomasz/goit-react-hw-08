import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./constants";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export const logIn = createAsyncThunk(
  "authenticatation/logIn",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("users/login", credentials);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
