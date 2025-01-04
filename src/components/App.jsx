import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

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
  return (
    <Layout>
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
