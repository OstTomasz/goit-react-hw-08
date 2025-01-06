import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { selectAuthentication } from "../redux/selectors";
import { Loader } from "../components/Loader";
import { DocumentTitle } from "../components/DocumentTitle";

export const LoginPage = () => {
  const { isLoading, logInError } = useSelector(selectAuthentication);
  return (
    <div>
      <DocumentTitle>HW8 Login</DocumentTitle>
      <h1>Login Page</h1>
      <LoginForm />
      {isLoading && <Loader />}
      {logInError && <p>There is no user with this credentials!</p>}
    </div>
  );
};
