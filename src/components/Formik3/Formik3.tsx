import { Formik, Field, Form, type FormikHelpers } from "formik";
import { useId } from "react";

interface FormikType {
  username: string;
  usersername: string;
  useremail: string;
  userphone: string;
  userallergy: string[];
  usertaste: "Proshutto" | "4 formagi" | "Diavola" | "";
}

const initialFormik: FormikType = {
  username: "",
  usersername: "",
  useremail: "",
  userphone: "",
  userallergy: [],
  usertaste: "",
};

export function Formik3() {
  const customId = useId();

  const handleSubmit = (
    values: FormikType,
    actions: FormikHelpers<FormikType>,
  ) => {
    console.log("Ім'я користувача:", values.username);
    console.log("Всі дані форми:", values);

    actions.resetForm();
  };

  return (
    <Formik<FormikType> initialValues={initialFormik} onSubmit={handleSubmit}>
      <Form>
        <fieldset>
          <legend>Data customer</legend>

          <label htmlFor={`${customId}-name`}>
            Name
            <Field
              name="username"
              type="text"
              id={`${customId}-name`}
              placeholder="Your name"
            ></Field>
          </label>

          <label htmlFor={`${customId}-surname`}>
            <Field
              name="usersername"
              type="text"
              id={`${customId}-surname`}
              placeholder="Your surname"
            ></Field>
          </label>

          <label htmlFor={`${customId}-mail`}>
            <Field
              name="useremail"
              type="email"
              id={`${customId}-mail`}
              placeholder="Your email"
            ></Field>
          </label>

          <label htmlFor={`${customId}-phone`}>
            <Field
              name="userphone"
              type="phone"
              id={`${customId}-phone`}
              placeholder="Your phone number"
            ></Field>
          </label>
        </fieldset>

        <fieldset>
          <legend>You preferences</legend>

          <label htmlFor={`${customId}-allergy-1`}>
            Gluten-Free
            <Field
              name="userallergy"
              type="checkbox"
              id={`${customId}-allergy-1`}
              value="Gluten-Free"
            ></Field>
          </label>
          <label htmlFor={`${customId}-allergy-2`}>
            Milk Product Free
            <Field
              name="userallergy"
              type="checkbox"
              id={`${customId}-allergy-2`}
              value="Milk Product Free"
            ></Field>
          </label>

          <label htmlFor={`${customId}-taste`}>
            <Field name="usertaste" as="select" id={`${customId}-taste`}>
              <option value="">Choose pizza taste</option>
              <option value="Proshutto">Proshutto</option>
              <option value="4 formagi">4 formagi</option>
              <option value="Diavola">Diavola</option>
            </Field>
          </label>
        </fieldset>

        <button type="submit">Place Order</button>
      </Form>
    </Formik>
  );
}
