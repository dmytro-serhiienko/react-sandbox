import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface QueryType {
  username: string;
  address: { city: string };
  id: number;
}

const poshuk = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log("Ось що прийшло від API:", response.data);
  return response.data;
};

export function Mut() {
  const { data, isError, isLoading } = useQuery<QueryType[]>({
    queryKey: ["users"],
    queryFn: poshuk,
  });

  if (isLoading) {
    return <span>Завантаження...</span>;
  }
  if (isError) {
    return <span>Помилка...</span>;
  }

  return (
    <div>
      {data &&
        data.map((el) => {
          return (
            <div key={el.id}>
              <p>{el.username}</p>
              <p>{el.address.city}</p>
            </div>
          );
        })}
    </div>
  );
}
