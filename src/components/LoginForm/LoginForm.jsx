import css from "./LoginForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/authentication/authenticationOperations";
import { NavLink } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Schema = Yup.object().shape({
  email: Yup.string().email().required("Enter email"),
  password: Yup.string().required("Enter password"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
            Log in
          </button>
          <NavLink to="/register">Create account</NavLink>
        </Form>
      </Formik>
    </div>
  );
};
