import { useSelector } from "react-redux";
import { RegisterForm } from "../components/RegistrationForm/RegistrationForm";
import { selectAuthentication } from "../redux/selectors";
import { Loader } from "../components/Loader";
import { DocumentTitle } from "../components/DocumentTitle";

export const RegisterPage = () => {
  const { isLoading, error } = useSelector(selectAuthentication);
  return (
    <div>
      <DocumentTitle>HW8 Register</DocumentTitle>
      <h1>Register Page</h1>
      <RegisterForm />
      {isLoading && <Loader />}
      {error && <p>This user already exist!</p>}
    </div>
  );
};
