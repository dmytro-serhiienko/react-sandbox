import { Field, Formik, Form } from "formik";
import { useId } from "react";

interface FormikType {
  usertext: string;
}

export function InputForm() {
  const customId = useId();

  const INITIALFORMIK: FormikType = {
    usertext: "",
  };

  const handleSubmit = (values: FormikType) => {
    console.log("Submitted values:", values);
  };

  return (
    <div>
      <Formik initialValues={INITIALFORMIK} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <h2>Напиши шось</h2>
            <label htmlFor={`${customId}-text`}>
              <Field type="text" name="usertext" id={`${customId}-text`} />
            </label>
            <br />
            <span>Твій текст: {values.usertext}</span>
          </Form>
        )}
      </Formik>
    </div>
  );
}
