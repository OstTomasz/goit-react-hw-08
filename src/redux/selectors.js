export const selectContacts = (state) => state.contacts;

export const selectInputedFilter = (state) => state.filters.name;

export const selectIsLoggedIn = (state) => state.authentication.isLoggedIn;
