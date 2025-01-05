import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

import css from "./Contacts.module.css";
import { DocumentTitle } from "../../components/DocumentTitle";

export const ContactsPage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>HW8 Contacts</DocumentTitle>
      <h1>Contacts Page</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
