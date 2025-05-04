import React from "react";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/contactsSlice";
import ContactListItem from "../ContactListItem/ContactListItem";
import ContactListStyles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className={ContactListStyles.list}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error loading contacts: {error}</p>}
      {contacts.length > 0
        ? contacts.map(({ id, name, number }) => (
            <li key={id} className={ContactListStyles.item}>
              <ContactListItem id={id} name={name} number={number} />
            </li>
          ))
        : !isLoading && !error && <p>No contacts found.</p>}
    </ul>
  );
};

export default ContactList;
