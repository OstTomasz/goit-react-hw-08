import { NavLink } from "react-router-dom";
import css from "./LoggingSetup.module.css";
import { setActive } from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

export const LoggingSetup = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? (
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
};
