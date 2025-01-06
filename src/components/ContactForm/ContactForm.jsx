import css from "./ContactForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperations";
import { selectContacts } from "../../redux/selectors";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  number: "",
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Make it longer")
    .max(50, "Make it shorter")
    .required("Enter name"),
  number: Yup.string()
    .matches("^([0-9]{3}-){2}[0-9]{2}$", "Correct format: xxx-xxx-xx")
    .required("Enter phone number"),
});

export const ContactForm = () => {
  const { items } = useSelector(selectContacts);

  const names = items.map((item) => item.name);
  const numbers = items.map((item) => item.number);

  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    if (names.includes(values.name)) {
      toast.error("Contact with this name already exists");
      return;
    }
    if (numbers.includes(values.number)) {
      toast.error("Contact with this number already exists");
      return;
    }
    dispatch(addContact(values));
    toast.success(`Successfully added contact ${values.name}!`);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <Form className="form">
        <div className={css["form-component"]}>
          <label className="label" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className="field"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="John Smith"
          />
          <ErrorMessage
            className={css["error-message"]}
            name="name"
            component="span"
          />
        </div>
        <div className={css["form-component"]}>
          <label className="label" htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className="field"
            type="tel"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xxx-xx"
          />
          <ErrorMessage
            className={css["error-message"]}
            name="number"
            component="span"
          />
        </div>
        <button className={css["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
