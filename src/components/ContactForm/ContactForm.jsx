import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactFormStyles from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, "Only letters are allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const handleSubmit = async (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={ContactFormStyles.form}>
          {" "}
          <div className={ContactFormStyles.form_item}>
            <label htmlFor="name" className={ContactFormStyles.label}>
              Name
            </label>
            <Field
              className={ContactFormStyles.field}
              type="text"
              name="name"
              id="name"
              pattern="[a-zA-Zа-яА-Я\s]*"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={ContactFormStyles.form_item_error}
            />
          </div>
          <div className={ContactFormStyles.form_item}>
            <label htmlFor="number" className={ContactFormStyles.label}>
              Number
            </label>
            <Field
              className={ContactFormStyles.field}
              type="tel"
              name="number"
              id="number"
              pattern="\d*"
            />
            <ErrorMessage
              name="number"
              component="span"
              className={ContactFormStyles.form_item_error}
            />
          </div>
          <button
            className={ContactFormStyles.form_btn_submit}
            type="submit"
            disabled={!(isValid && dirty) || isLoading}
          >
            {isLoading ? "Adding..." : "Add contact"}{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
