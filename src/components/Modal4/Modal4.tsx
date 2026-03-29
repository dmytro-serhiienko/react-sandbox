import { Formik, Form, Field } from "formik";
import { useId } from "react";

interface FormikType {
  userid: number;
}

export function Modal4() {
  const customId = useId();

  const initialValues: FormikType = {
    userid: 1,
  };

  const handleSubmit = () => {
    console.log("Pushed");
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <>
            <Form>
              <fieldset>
                <legend>Put id of user</legend>
                <label htmlFor="">
                  <Field
                    type="text"
                    name="userid"
                    id={`${customId}-id`}
                  ></Field>
                </label>
              </fieldset>
              <button type="submit">Search by ID</button>
            </Form>
            <span>Number: {values.userid}</span>
          </>
        )}
      </Formik>
    </div>
  );
}
