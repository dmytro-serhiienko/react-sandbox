import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Advice() {
  const poshuk = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data.slip;
  };

  const { data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: poshuk,
    enabled: false,
  });

  return (
    <div>
      {isFetching && <p>LOADING...</p>}
      {isError && <p>{error.message}</p>}
      {data && (
        <p>
          № {data.id},<br /> Advice: {data.advice}
        </p>
      )}

      <button onClick={() => refetch()} type="button">
        New Advice
      </button>
    </div>
  );
}
