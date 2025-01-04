import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./PrivateRoute";

export const RestrictedRoute = ({ component, redirectPath }) => {
  return isLoggedIn ? <Navigate to={redirectPath} /> : component;
};
