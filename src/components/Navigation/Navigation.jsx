import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

export const setActive = ({ isActive }) => {
  return isActive ? `${css.navlink} ${css.active}` : `${css.navlink}`;
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.wrapper}>
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActive} to="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
