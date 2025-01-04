import { NavLink } from "react-router-dom";
import css from "./LoggingSetup.module.css";
import { setActive } from "../Navigation/Navigation";
import { isLoggedIn } from "../Layout/Layout";

export const LoggingSetup = () =>
  !isLoggedIn ? (
    <nav className={css.wrapper}>
      <NavLink className={setActive} to="/register">
        Register
      </NavLink>
      <NavLink className={setActive} to="/login">
        Login
      </NavLink>
    </nav>
  ) : (
    <div className={css.wrapper}>
      <span>Welcome UserName!</span>
      <NavLink className={setActive} to="/">
        Logout
      </NavLink>
    </div>
  );
