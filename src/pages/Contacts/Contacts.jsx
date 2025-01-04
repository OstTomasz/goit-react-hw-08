import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

import css from "./Contacts.module.css";

export const ContactsPage = () => {
  return (
    <div className={css.wrapper}>
      <h1>Contacts Page</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
