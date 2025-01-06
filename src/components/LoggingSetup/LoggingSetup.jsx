import { NavLink } from "react-router-dom";
import css from "./LoggingSetup.module.css";
import { setActive } from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthentication } from "../../redux/selectors";
import { logOut } from "../../redux/authentication/authenticationOperations";

export const LoggingSetup = () => {
  const { isLoggedIn, user } = useSelector(selectAuthentication);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
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
      <span>Welcome {user.name}!</span>
      <button onClick={handleLogOut}>
        <NavLink to="/">Logout</NavLink>
      </button>
    </div>
  );
};
