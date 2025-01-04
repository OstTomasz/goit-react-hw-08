import { NavLink } from "react-router-dom";
import css from "./LoggingSetup.module.css";
import { setActive } from "../Navigation/Navigation";

export const LoggingSetup = () => {
  return (
    <nav className={css.wrapper}>
      <NavLink className={setActive} to="/register">
        Register
      </NavLink>
      <NavLink className={setActive} to="/login">
        Login
      </NavLink>
      {/* <Link>Logout</Link> */}
    </nav>
  );
};
