import css from "./LoggingSetup.module.css";

export const LoggingSetup = () => {
  return (
    <div className={css.wrapper}>
      <button>Register</button>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};
