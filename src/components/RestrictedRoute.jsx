import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthentication } from "../redux/selectors";

export const RestrictedRoute = ({ component, redirectPath }) => {
  const { isLoggedIn } = useSelector(selectAuthentication);
  return isLoggedIn ? <Navigate to={redirectPath} /> : component;
};
