import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

const BASE_URL = "https://rickandmortyapi.com/api/character";

interface Typ {
  id: number;
  name: string;
  image: string;
}

// Це апі не працює з АЙДІ
// const params = {
//   params: {
//     id: 2,
//   },
// };

// 1-Пошук
const poshuk = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export function RickFn() {
  const { data, error, isLoading, isError } = useQuery<{ results: Typ[] }>({
    queryKey: ["personaz"],
    queryFn: poshuk,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>`Ups: ${error.message}`</p>}
      {data &&
        data.results.map(({ id, name, image }) => {
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <img src={image} alt="" />
            </div>
          );
        })}
    </div>
  );
}

// !!!

const JApi = "https://jsonplaceholder.typicode.com/users";

interface MyPolya {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

const poshuk2 = async () => {
  const response = await axios.get(JApi);
  return response.data;
};

export function JApiFn() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["person"],
    queryFn: poshuk2,
  });

  return (
    <>
      {isLoading && <p>is Loading ...</p>}
      {isError && <p>Ups...{error.message}</p>}
      {data &&
        data.map(({ id, name, email, address: { city } }: MyPolya) => {
          return (
            <div key={id}>
              <p>{name}</p>
              <p>{city}</p>
              <p>{email}</p>
            </div>
          );
        })}
    </>
  );
}

//!!!!

// const BASE_URL_J = "https://jsonplaceholder.typicode.com/users";

// interface ShukaiType {
//   name: string;
// }

// export function Shukai() {
//   const poshuk = async () => {
//     const response = await axios.get(BASE_URL_J);
//     return response.data;
//   };

//   const { data, error, isLoading, isError } = useQuery({
//     queryKey: ["users"],
//     queryFn: poshuk,
//   });

//   return (
//     <ul>
//       <li>
//         {isLoading && <p>LOADING...</p>}
//         {isError && <p>Сталась помилка {error.message}</p>}
//         {data &&
//           data.map(({ name }: ShukaiType) => {
//             return <p>{name}</p>;
//           })}
//       </li>
//     </ul>
//   );
// }

// !

// Лічильник
// import { useState } from "react";

const BASE_URL_J = "https://jsonplaceholder.typicode.com/users";

interface Shukai2Type {
  name: string;
  id: number;
}

export function Shukai2() {
  const [countId, setCountId] = useState(0);

  const poshuk3 = async () => {
    const response = await axios.get(BASE_URL_J);
    return response.data;
  };

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: poshuk3,
    enabled: false,
  });

  const handleSubmit = () => {
    refetch();
    setCountId((countId) => countId + 1);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error {error.message}</p>}
      {data &&
        data.map(({ id, name }: Shukai2Type) => {
          return id === countId ? <p key={id}>{name}</p> : null;
        })}

      <button
        onClick={handleSubmit}
        type="button"
        disabled={countId >= 10 ? true : false}
      >
        Покажи юзера
      </button>
    </div>
  );
}

// !!!!!!

// const BASE_URL_R = "https://randomuser.me/api/";

// interface ApiShowType {
//   name: { title: string; first: string; last: string };
//   location: { country: string };
//   id: { value: number };
// }

// export function ApiShow() {
//   const [userId, setUserId] = useState(0);

//   const poshuk4 = async () => {
//     const response = await axios.get(BASE_URL_R);
//     return response.data.results;
//   };

//   const { data, error, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: poshuk4,
//     enabled: false,
//   });

//   const handleSubmit = () => {
//     refetch();
//     setUserId((userId) => userId + 1);
//   };

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error {error.message}</p>}
//       {data &&
//         data.map(
//           ({
//             id: { value },
//             name: { title, first, last },
//             location: { country },
//           }: ApiShowType) => {
//             return (
//               <div key={value}>
//                 <p>
//                   User: {title} {first} {last}
//                 </p>
//                 <p>Country: {country}</p>
//               </div>
//             );
//           },
//         )}
//       <button onClick={handleSubmit} type="button">
//         Show Random
//       </button>
//     </div>
//   );
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! FORMIK + API

interface ApiDataType {
  id: number;
  title: string;
  body: string;
}

export function ShowPost() {
  const [idValue, setIdValue] = useState<string>("");

  const poshuk5 = async (id: string) => {
    if (!id) return null;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.data;
  };

  const { data, error, isLoading, isError } = useQuery<ApiDataType>({
    queryKey: ["post", idValue],
    queryFn: () => poshuk5(idValue),
    enabled: !!idValue,
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Пошук поста за ID</h2>

      <Formik
        initialValues={{ userId: "" }}
        onSubmit={(values) => {
          setIdValue(values.userId);
        }}
      >
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="userId" style={{ marginRight: "10px" }}>
              Введіть ID поста:
            </label>
            <Field
              name="userId"
              id="userId"
              type="number"
              placeholder="Наприклад: 1"
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Шукаю..." : "Показати пост"}
          </button>
        </Form>
      </Formik>

      <hr style={{ margin: "20px 0" }} />

      {isLoading && <p>Завантаження даних...</p>}

      {isError && (
        <p style={{ color: "red" }}>
          Помилка:{" "}
          {error instanceof Error ? error.message : "Не вдалося знайти пост"}
        </p>
      )}

      {data && (
        <article
          style={{
            background: "#f4f4f4",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <small>ID поста: {data.id}</small>
        </article>
      )}
    </div>
  );
}
