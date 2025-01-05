import { NavLink } from "react-router-dom";
import { DocumentTitle } from "../components/DocumentTitle";

export const HomePage = () => {
  return (
    <div>
      <DocumentTitle>HW8 Home</DocumentTitle>
      <h1>Home Page</h1>
      <p>Welcome to our home page!</p>
      <p>
        You need to {<NavLink to="/login">log in</NavLink>}
        &nbsp;to see Your privete phonebook.
      </p>
    </div>
  );
};
