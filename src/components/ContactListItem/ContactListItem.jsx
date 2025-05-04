import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import ContactListItemStyles from "./ContactListItem.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={ContactListItemStyles.item_wrap}>
      {" "}
      <p className={ContactListItemStyles.info}>
        {" "}
        <IoPersonSharp className={ContactListItemStyles.icon} /> {name}:{" "}
        <FaPhoneAlt className={ContactListItemStyles.icon} /> {number}
      </p>
      <button onClick={handleDelete} className={ContactListItemStyles.button}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
