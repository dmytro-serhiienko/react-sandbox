import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface QueryType {
  name: string;
  email: string;
  id: number;
}

export function Busco() {
  const [currentId, SetID] = useState(1);

  const poshuk = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${currentId}`,
    );
    console.log(`Відповідь АПІ: ${response.data}`);

    return response.data;
  };

  const { data, error, isError, isFetching, refetch } = useQuery<QueryType>({
    queryKey: ["showw", currentId],
    queryFn: poshuk,
    // enabled: false,
  });

  if (isFetching) {
    return <div>its Loading ...</div>;
  }
  if (isError) {
    return <div>its Error: {error.message}</div>;
  }

  const handleSubmit = () => {
    SetID((currentId) => currentId + 1);
    refetch();
  };

  return (
    <div>
      <div>
        <p>{data?.name}</p>
        <p>{data?.email}</p>
      </div>

      <button type="button" onClick={handleSubmit}>
        Show User
      </button>
    </div>
  );
}
