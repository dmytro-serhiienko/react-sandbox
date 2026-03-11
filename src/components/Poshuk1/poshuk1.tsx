import { useQuery } from "@tanstack/react-query";
import { Formik, Field, Form } from "formik";
import { useId, useState } from "react";
import axios from "axios";

interface QueryType {
  name: string;
  status: string;
  species: string;
}

const initialValue = {
  userid: "",
};

export function Poshuk1() {
  const [id, setId] = useState("");
  const customId = useId();

  // Функція запиту: бере актуальний 'id' зі стану прямо в момент виклику
  const posh1 = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return response.data;
  };

  const { data, error, isError, isFetching, refetch } = useQuery<QueryType>({
    queryKey: ["persona", id], // Ключ змінюється разом із ID
    queryFn: posh1,
    enabled: false, // Не вантажити автоматично
  });

  return (
    <div>
      {/* 1. Formik бере значення з інпуту */}
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          setId(values.userid); // Записуємо введене ID в стан
          refetch(); // Кажемо React Query: "Час завантажувати!"
        }}
      >
        <Form>
          <fieldset>
            <legend>Write id of character</legend>
            <Field name="userid" id={`${customId}-custom`} />
            <button type="submit">Show</button>
          </fieldset>
        </Form>
      </Formik>

      {isFetching && <div>Loading...</div>}
      {isError && <div>Ups, ERROR: {error.message}</div>}
      {data && !isFetching && (
        <ul>
          <li>{data.name}</li>
          <li>{data.status}</li>
          <li>{data.species}</li>
        </ul>
      )}
    </div>
  );
}
