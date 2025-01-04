import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component, redirectPath }) => {
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={redirectPath} /> : component;
};
