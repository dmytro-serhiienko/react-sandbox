import { useId } from "react";

import { Formik, Form, Field, type FormikHelpers } from "formik";

// Інтерфейс
interface MySetting {
  username: string;
  useremail: string;
  level: string;
}

// Що саме в Форміку
const FormikInitialValues: MySetting = {
  username: "",
  useremail: "",
  level: "",
};

// Головна обгортка
export function Forma() {
  const MyId = useId();

  // Що зробить при кліку - поміщаємо в on Submit
  const handleSubmit = (
    values: MySetting,
    actions: FormikHelpers<MySetting>,
  ) => {
    console.log("Formik - відправлено");
    console.log({ values });
    console.log({ actions });

    console.log("Ім'я користувача:", values.username);
    console.log("Email:", values.useremail);
    console.log("Рівень:", values.level);

    actions.resetForm();
  };

  // Малюємо форму
  return (
    <Formik initialValues={FormikInitialValues} onSubmit={handleSubmit}>
      <Form>
        <fieldset>
          <legend>Work Form</legend>
          <label htmlFor={`${MyId}-name`}>Name</label>
          <Field type="text" name="username" id={`${MyId}-name`} />

          <label htmlFor={`${MyId}-mail`}>Email</label>
          <Field type="email" name="useremail" id={`${MyId}-mail`} />

          <label htmlFor={`${MyId}-level`}></label>
          <Field as="select" name="level" id={`${MyId}-level`}>
            <option value="">Choose option</option>
            <option value="frontend">Front-End Developer</option>
            <option value="backend">Back-End Developer</option>
            <option value="fullstack">Full-Stack Developer</option>
          </Field>

          <button type="submit">SEND</button>
        </fieldset>
      </Form>
    </Formik>
  );
}
