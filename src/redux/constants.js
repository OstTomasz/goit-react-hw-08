import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

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
