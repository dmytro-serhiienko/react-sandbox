import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

interface FormikType {
  username: string;
  useremail: string;
  userphone: number;
}

const INITIAL_VALUES: FormikType = {
  username: "",
  useremail: "",
  userphone: +38,
};

export function Formik2() {
  const customId = useId();

  const SCHEMA = Yup.object({
    username: Yup.string().min(2, "To short").max(10, "To large").required(),
    useremail: Yup.string().min(4, "To short").max(20, "To large").required(),
    userphone: Yup.number().min(4, "To short").max(20, "To large"),
  });

  const handleSubmit = (
    values: FormikType,
    actions: FormikHelpers<FormikType>,
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <fieldset>
          <legend>Put your data</legend>

          <label htmlFor="">
            <Field
              type="name"
              name="username"
              id={`${customId}-name`}
              placeholder="Name"
            ></Field>
            <ErrorMessage name="username" />
          </label>

          <label htmlFor="">
            <Field
              type="email"
              name="useremail"
              id={`${customId}-email`}
              placeholder="Email"
            ></Field>
          </label>

          <label htmlFor="">
            <Field
              type="phone"
              name="userphone"
              id={`${customId}-tel`}
              placeholder="Phone"
            ></Field>
          </label>

          <button type="submit">Send</button>
        </fieldset>
      </Form>
    </Formik>
  );
}
