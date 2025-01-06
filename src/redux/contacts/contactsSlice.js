import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { name: "First contact", number: "xxx-xxx-xx", id: "a" },
    { name: "Second contact", number: "xxx-xxx-xx", id: "b" },
    { name: "Third contact", number: "xxx-xxx-xx", id: "c" },
    { name: "Fourth contact", number: "xxx-xxx-xx", id: "d" },
    { name: "Fifth contact", number: "xxx-xxx-xx", id: "e" },
    { name: "Sixth contact", number: "xxx-xxx-xx", id: "f" },
  ],
  isLoading: false,
  error: null,
};

import {
  fetchingContacts,
  addContact,
  deleteContact,
  editContact,
} from "./contactsOperations";
import { handlePending, handleRejected } from "../constants";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchingContacts.pending, handlePending)
      .addCase(fetchingContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.items = actions.payload;
        state.error = null;
      })
      .addCase(fetchingContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== actions.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex((contact) => {
          contact.id === actions.payload.id;
        });
        state.items.splice(index, 1, actions.payload);
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
