import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchingContacts = createAsyncThunk(
  `contacts/fetchContacts`,
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      const contacts = response.data;
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/addContact`,
  async (values, thunkApi) => {
    try {
      const response = await axios.post("/contacts", {
        name: values.name,
        number: values.number,
      });
      const contacts = response.data;
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      const contacts = response.data;
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
