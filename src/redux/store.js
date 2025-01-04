import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { authenticationReducer } from "./authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    authentication: authenticationReducer,
  },
});
