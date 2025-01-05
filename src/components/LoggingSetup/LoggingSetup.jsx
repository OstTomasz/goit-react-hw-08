import { NavLink } from "react-router-dom";
import css from "./LoggingSetup.module.css";
import { setActive } from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import { logOut } from "../../redux/authentication/authenticationOperations";

export const LoggingSetup = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut);
  };
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
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
