import { Formik, Field, Form, type FormikHelpers, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./Formik4.module.css";

import toast from "react-hot-toast";

interface FormikType {
  username: string;
  useremail: string;
  userselect: string;
}

const initialValuesFormik: FormikType = {
  username: "",
  useremail: "",
  userselect: "",
};

const SCHEMA = Yup.object({
  username: Yup.string()
    .min(3, "Мінімум 3 символи")
    .required("Обов'язкове поле"),
  useremail: Yup.string()
    .email("Невірний формат пошти")
    .required("Пошта обов'язкова"),
  userselect: Yup.string()
    .oneOf(["Male", "Female"], "Оберіть стать")
    .required("Обов'язкове поле"),
});

export function Formik4() {
  const customId = useId();

  const handleSubmit = (
    value: FormikType,
    actions: FormikHelpers<FormikType>,
  ) => {
    try {
      toast.success("Successfully toasted!");
      console.log(
        `Імя: ${value.username}, Пошта: ${value.useremail}, Стать: ${value.userselect}`,
      );
      actions.resetForm();
    } catch {
      toast.error("Щось пішло не так...");
    }
  };

  return (
    <Formik
      initialValues={initialValuesFormik}
      validationSchema={SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend>About you</legend>
          <label htmlFor={`${customId}-name`}>
            <Field
              className={css.field_1}
              type="text"
              name="username"
              id={`${customId}-name`}
              placeholder="Name"
            ></Field>
            <ErrorMessage
              name="username"
              component="span"
              className={css.errorText}
            />
          </label>

          <label htmlFor={`${customId}-email`}>
            <Field
              className={css.field_2}
              type="email"
              name="useremail"
              id={`${customId}-email`}
              placeholder="Email"
            ></Field>
            <ErrorMessage
              name="useremail"
              component="span"
              className={css.errorText}
            />
          </label>

          <label htmlFor={`${customId}-select`}>
            <Field
              as="select"
              name="userselect"
              id={`${customId}-select`}
              className={css.field_3}
            >
              <option value="Choose...">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="userselect"
              component="span"
              className={css.errorText}
            />
          </label>
        </fieldset>
        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
