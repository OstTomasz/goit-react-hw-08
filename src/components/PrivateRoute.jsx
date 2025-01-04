import { Navigate } from "react-router-dom";

export const isLoggedIn = false;

export const PrivateRoute = ({ component, redirectPath }) => {
  return isLoggedIn ? component : <Navigate to={redirectPath} />;
};
