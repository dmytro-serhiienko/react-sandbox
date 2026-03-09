import { Formik, Form, Field } from "formik";
import { useId } from "react";

interface FormType1 {
  username: string;
  useremail: string;
  userphone: string;
  userok: string;
}

export function Form1() {
  const customId = useId();

  const FormikValues: FormType1 = {
    username: "",
    useremail: "",
    userphone: "",
    userok: "",
  };

  // values міститиме всі поля, визначені у FormType1
  const handleSubmit = (values: FormType1) => {
    console.log({ username: values.username });

    console.log("Ми це зробили", values);
  };

  return (
    <Formik initialValues={FormikValues} onSubmit={handleSubmit}>
      <Form>
        <fieldset>
          <legend>Залиш свою заявку</legend>

          <label htmlFor={`${customId}-name`}>
            <Field name="username" type="text" id={`${customId}-name`}></Field>
          </label>

          <label htmlFor={`${customId}-email`}>
            <Field
              name="useremail"
              type="email"
              id={`${customId}-email`}
            ></Field>
          </label>

          <label htmlFor={`${customId}-phone`}>
            <Field
              name="userphone"
              type="phone"
              id={`${customId}-phone`}
            ></Field>
          </label>

          <fieldset>
            <legend>Чи згоден з нашою політикою?</legend>
            <label htmlFor={`${customId}-agry`}>
              <Field
                name="userok"
                type="checkbox"
                id={`${customId}-agry`}
              ></Field>
            </label>
          </fieldset>

          <button type="submit">Відправити</button>
        </fieldset>
      </Form>
    </Formik>
  );
}
