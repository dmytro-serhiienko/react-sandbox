import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

interface Typ {
  id: number;
  name: string;
  image: string;
}

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
