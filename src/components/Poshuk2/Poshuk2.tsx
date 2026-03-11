import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useId, useState } from "react";

interface QueryType {
  body: string;
}

interface FormikType {
  userid: number;
}

const initialValue: FormikType = {
  userid: 0,
};

export function Poshuk2() {
  const [currentid, setcurrentId] = useState(0);
  const customId = useId();

  const posh2 = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${currentid}`,
    );
    return response.data;
  };

  const { data, error, isLoading, isError, refetch } = useQuery<QueryType>({
    queryKey: ["post", currentid],
    queryFn: posh2,
    enabled: false,
  });

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          setcurrentId(values.userid);
          refetch();
          console.log("Сабміт натиснуто!");
        }}
      >
        <Form>
          <fieldset>
            <legend>Put number of post</legend>
            <Field name="userid" type="text" id={`${customId}-input`}></Field>
            <button type="submit">Search</button>
          </fieldset>
        </Form>
      </Formik>

      {isLoading && <div>LOADING...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <div>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
