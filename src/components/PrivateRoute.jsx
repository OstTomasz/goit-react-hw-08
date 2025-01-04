import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Layout/Layout";

export const PrivateRoute = ({ component, redirectPath }) => {
  return isLoggedIn ? component : <Navigate to={redirectPath} />;
};
