import css from "./search.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export function SearchUser() {
  // 1. Сховище для масиву користувачів
  const [user, setUser] = useState([]);
  // 2. Сховище для тексту в інпуті
  const [value, setValue] = useState("");

  // 3. Завантаження всіх користувачів при старті сторінки
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(BASE_URL);
        setUser(data); // Кладемо масив з 10 юзерів
      } catch (error) {
        console.error("Помилка при завантаженні:", error);
      }
    };
    fetchData();
  }, []); // [] означає "виконати 1 раз"

  // 4. Функція пошуку за конкретним ID
  const handleSearch = async (event) => {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    if (!value) return; // Якщо інпут порожній — нічого не робимо

    try {
      // Запит до конкретного ресурсу: BASE_URL/1, BASE_URL/2 тощо
      const { data } = await axios.get(`${BASE_URL}/${value}`);

      // ВАЖЛИВО: API повертає ОБ'ЄКТ, а нам потрібен МАСИВ для .map()
      // Тому огортаємо data в квадратні дужки [data]
      setUser([data]);
    } catch (error) {
      alert("Користувача з таким ID не знайдено!");
      setUser([]); // Очищуємо список, якщо нікого не знайшли
    }
  };

  return (
    <div className={css.global}>
      {/* Додаємо onSubmit на форму, щоб працював Enter */}
      <form onSubmit={handleSearch}>
        <fieldset>
          <legend>Пошук по ID користувача</legend>

          <label>
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Введіть ID (1-10)"
            />
          </label>
          <button type="submit">Знайти</button>
        </fieldset>
      </form>

      <div className={css.search_div}>
        <ul>
          {user.map(({ id, name, username }) => (
            // key має бути на найпершому зовнішньому тегу всередині map
            <li key={id} className={css.user_item}>
              <strong>Name:</strong> {name} | <strong>Username:</strong> @
              {username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// !!!
