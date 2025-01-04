import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Layout/Layout";

export const RestrictedRoute = ({ component, redirectPath }) => {
  return isLoggedIn ? <Navigate to={redirectPath} /> : component;
};
