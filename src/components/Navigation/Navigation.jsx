import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <button>Home</button>
      <button>Contacts</button>
    </div>
  );
};
