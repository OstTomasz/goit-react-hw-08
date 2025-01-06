import css from "./RegistrationForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { register } from "../../redux/authentication/authenticationOperations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Make it longer")
    .max(10, "Make it shorter")
    .required("Enter username"),
  email: Yup.string().email().required("Enter email"),
  password: Yup.string().required("Enter password"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form className="form">
          <div className={css["form-component"]}>
            <label className="label" htmlFor={nameFieldId}>
              Username
            </label>
            <Field
              className="field"
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Mango123"
            />
            <ErrorMessage
              className={css["error-message"]}
              name="name"
              component="span"
            />
          </div>
          <div className={css["form-component"]}>
            <label className="label" htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className="field"
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="example@example.com"
            />
            <ErrorMessage
              className={css["error-message"]}
              name="email"
              component="span"
            />
          </div>
          <div className={css["form-component"]}>
            <label className="label" htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className="field"
              type="password"
              name="password"
              id={passwordFieldId}
              placeholder="password"
              autoComplete="off"
            />
            <ErrorMessage
              className={css["error-message"]}
              name="password"
              component="span"
            />
          </div>
          <button className={css["submit-btn"]} type="submit">
            Create account
          </button>
        </Form>
      </Formik>
    </div>
  );
};
