import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

interface ApishkaType {
  id: number;
  name: string;
  address: { city: string };
}

export function Apishka() {
  const [userIndex, setUserIndex] = useState(0);

  const poshuk1 = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  };

  const { data, error, isLoading, isError, refetch } = useQuery<ApishkaType[]>({
    queryKey: ["users"],
    queryFn: poshuk1,
    enabled: false,
  });

  const handleSubmit = () => {
    if (!data) {
      refetch();
    } else {
      setUserIndex((prev) => prev + 1);
    }
  };

  const currentUser = data ? data[userIndex] : null;

  return (
    <div>
      {isLoading && <p>LOADING...</p>}
      {isError && <p>Error: {error.message}</p>}

      {currentUser ? (
        <div>
          <p>ID: {currentUser.id}</p>
          <p>Name: {currentUser.name}</p>
          <p>City: {currentUser.address.city}</p>
        </div>
      ) : (
        data && <p>Користувачі закінчилися або натисніть "Show Me"</p>
      )}

      {(!data || userIndex < data.length - 1) && (
        <button onClick={handleSubmit} type="button">
          {data ? "Next User" : "Show Me"}
        </button>
      )}
    </div>
  );
}
