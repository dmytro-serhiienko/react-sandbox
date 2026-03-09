import axios from "axios";
import css from "./Autoriz.module.css";
import { useQuery } from "@tanstack/react-query";

interface InterfaceType {
  status: string;
  species: string;
  image: string;
}

const BASE_URL = "https://rickandmortyapi.com/api/character/2";

const poshuk = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export function ShowAva() {
  const { data, isLoading } = useQuery<InterfaceType>({
    queryKey: ["user"],
    queryFn: poshuk,
  });

  if (isLoading) return <div>Завантаження...</div>;

  return (
    <div className={css.avadiv}>
      <h3 className={css.avadiv_title}>You right now:</h3>

      <p className={css.avadiv_status}>You: {data?.status}</p>
      <p className={css.avadiv_spec}>Species: {data?.species}</p>
      <div className={css.avka}>
        <p className={css.avadiv_img_text}>Image:</p>
        <img src={data?.image} alt="" className={css.avadiv_img} />
      </div>
    </div>
  );
}
