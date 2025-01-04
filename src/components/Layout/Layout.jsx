import { Suspense } from "react";
import { LoggingSetup } from "../LoggingSetup/LoggingSetup";
import { Navigation } from "../Navigation/Navigation";
import { Loader } from "../Loader";
import css from "./Layout.module.css";

export let isLoggedIn = true;
export const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <Navigation />
        <h2>Your private phonebook</h2>
        <LoggingSetup />
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <footer className={css.footer}>
        <p> 2025 Your private phonebook. All rights reserved &copy; </p>
      </footer>
    </div>
  );
};
