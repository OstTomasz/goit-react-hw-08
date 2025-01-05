import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthentication } from "../redux/selectors";

export const PrivateRoute = ({ component, redirectPath }) => {
  const { isLoggedIn } = useSelector(selectAuthentication);
  return isLoggedIn ? component : <Navigate to={redirectPath} />;
};
