import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { isLoggedIn } from "../Layout/Layout";

export const setActive = ({ isActive }) => {
  return isActive ? `${css.navlink} ${css.active}` : `${css.navlink}`;
};

export const Navigation = () => {
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
