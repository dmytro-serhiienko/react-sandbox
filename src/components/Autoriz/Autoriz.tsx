import css from "./Autoriz.module.css";
import { Formik, Field, Form } from "formik";
import { useId } from "react";

import { handleSubmit } from "./AutorizSubmit";

interface FormikType {
  username: string;
  userpassword: string;
  usercheck: string;
}

export function AutorizeForm() {
  const customId = useId();

  const FormikValues: FormikType = {
    username: "",
    userpassword: "",
    usercheck: "",
  };

  return (
    <Formik initialValues={FormikValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <h3 className={css.form_title}>Enter to watch your character</h3>

        <label htmlFor="" className={css.field_label_name}>
          Username
          <Field
            name="username"
            placeholder="Your username"
            type="text"
            id={`${customId}-name`}
            className={css.field_name}
          ></Field>
        </label>

        <label htmlFor="" className={css.field_label_password}>
          Password
          <Field
            name="userpassword"
            placeholder="Your password"
            type="password"
            id={`${customId}-password`}
            className={css.field_password}
          ></Field>
        </label>

        <label htmlFor="" className={css.field_label_checkbox}>
          <Field
            name="usercheck"
            type="checkbox"
            id={`${customId}-check`}
            className={css.field_check}
          ></Field>
          Запамятати мене
        </label>

        <button type="submit" className={css.btn}>
          Sing in
        </button>
      </Form>
    </Formik>
  );
}
