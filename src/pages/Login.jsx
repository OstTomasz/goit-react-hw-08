import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { selectAuthentication } from "../redux/selectors";
import { Loader } from "../components/Loader";

export const LoginPage = () => {
  const { isLoading, error } = useSelector(selectAuthentication);
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      {isLoading && <Loader />}
      {error && <p>There is no user with this credentials!</p>}
    </div>
  );
};
