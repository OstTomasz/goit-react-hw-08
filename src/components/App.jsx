import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { ContactsPage } from "../pages/Contacts/Contacts";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/PageNotFound";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
