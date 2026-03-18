import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import css from "./Mostra.module.css";

// Описуємо структуру
interface QueryType {
  name: string;
  email: string;
  id: number;
}

// (GET)
const poshuk = async (): Promise<QueryType[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  return response.data;
};

export function Mostra() {
  const queryClient = useQueryClient();

  // Отримання
  const { data, error, isLoading, isError } = useQuery<QueryType[]>({
    queryKey: ["doshka"],
    queryFn: poshuk,
  });

  // (DELETE)
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doshka"] });
      console.log("Запит на видалення успішний!");
    },
  });

  if (isError) {
    return <div>Помилка: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={css.mostra_global}>
      {data &&
        data.map(({ id, name, email }: QueryType) => {
          return (
            <div className={css.mostra_card} key={id}>
              <p>
                <strong>Ім'я:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>

              <button
                className={css.delete_btn}
                onClick={() => mutation.mutate(id)}
                type="button"
                disabled={mutation.isPending}
              >
                Х
              </button>
            </div>
          );
        })}
    </div>
  );
}
