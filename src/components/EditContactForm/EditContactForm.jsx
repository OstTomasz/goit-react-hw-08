import css from "./EditContactForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Make it longer")
    .max(50, "Make it shorter")
    .required("Enter name"),
  number: Yup.string()
    .matches("^([0-9]{3}-){2}[0-9]{2}$", "Correct format: xxx-xxx-xx")
    .required("Enter phone number"),
});

export const EditContactForm = ({ name, number }) => {
  const initialValues = {
    name: name,
    number: number,
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  //   const { items } = useSelector(selectContacts);
  //   const names = items.map((item) => item.name);
  //   const numbers = items.map((item) => item.number);
  //   const handleSubmit = (values, actions) => {
  //     if (names.includes(values.name)) {
  //       toast.error("Contact with this name already exists");
  //       return;
  //     }
  //     if (numbers.includes(values.number)) {
  //       toast.error("Contact with this number already exists");
  //       return;
  //     }
  //     dispatch(addContact(values));
  //     toast.success(`Successfully added contact ${values.name}!`);
  //     actions.resetForm();
  //   };

  return (
    <Formik initialValues={initialValues} validationSchema={Schema}>
      <Form className="form">
        <div className={css["form-component"]}>
          <label className="label" htmlFor={nameFieldId}>
            Name
          </label>
          <Field className="field" type="text" name="name" id={nameFieldId} />
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
      </Form>
    </Formik>
  );
};
