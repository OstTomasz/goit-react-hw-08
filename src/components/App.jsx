import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/authentication/authenticationOperations";
import { selectAuthentication } from "../redux/selectors";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() =>
  import("../pages/Home").then((module) => ({
    default: module["HomePage"],
  }))
);
const ContactsPage = lazy(() =>
  import("../pages/Contacts/Contacts").then((module) => ({
    default: module["ContactsPage"],
  }))
);
const RegisterPage = lazy(() =>
  import("../pages/Register").then((module) => ({
    default: module["RegisterPage"],
  }))
);
const LoginPage = lazy(() =>
  import("../pages/Login").then((module) => ({
    default: module["LoginPage"],
  }))
);
const NotFoundPage = lazy(() =>
  import("../pages/PageNotFound").then((module) => ({
    default: module["NotFoundPage"],
  }))
);

export const App = () => {
  const { isRefreshUser } = useSelector(selectAuthentication);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  if (isRefreshUser) {
    return <p>refreshing..</p>;
  }
  return (
    <Layout>
      <div>
        <Toaster position="top-right" reverseOrder={false} />{" "}
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectPath="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
