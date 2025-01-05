import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our home page!</p>
      <p>
        You need to {<NavLink to="/login">log in</NavLink>}
        &nbsp;to see Your privete phonebook.
      </p>
    </div>
  );
};
