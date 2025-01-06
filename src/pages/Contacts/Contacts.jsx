import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

import css from "./Contacts.module.css";
import { DocumentTitle } from "../../components/DocumentTitle";
import { AddContactForm } from "../../components/AddContactForm/AddContactForm";

export const ContactsPage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>HW8 Contacts</DocumentTitle>
      <h1>Contacts Page</h1>
      <AddContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
