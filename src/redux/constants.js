import axios from "axios";

export const BASE_URL = "https://6777bdd680a79bf91902c936.mockapi.io";

export const BASE_URL2 = "https://connections-api.goit.global";

export const setAuthenticationHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token} `;
};
export const clearAuthenticationHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
export const handlePending = (state) => {
  state.isLoading = true;
};
export const handleRejected = (state, actions) => {
  state.isLoading = false;
  state.error = actions.payload;
};
