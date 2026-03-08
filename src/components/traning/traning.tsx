//! Компонент StatusLabel
// Пропси:
// isActive: boolean

// Виводить один рядок:
// якщо isActive = true → "Активний" зеленим
// якщо isActive = false → "Неактивний" сірим

// Використовуй тернарний оператор всередині JSX (без окремої змінної).

import css from "./traning.module.css";

interface Setting {
  isActive: boolean;
}

export default function StatusLabel({ isActive }: Setting) {
  return (
    <p className={isActive ? css.statusT : css.statusF}>
      {isActive ? "Активний" : "Неактивний"}
    </p>
  );
}

//! Компонент GreetingTime
// Пропси (інтерфейс):
// TypeScriptinterface GreetingTimeProps {
//   name: string;              // ім'я людини
//   hour: number;              // година доби (0–23)
//   isLoggedIn: boolean;       // чи увійшов користувач
// }
// Що потрібно вивести (все в одному  або ):

// Якщо користувач не залогінений (isLoggedIn === false) → завжди виводимо:
// «Привіт, гість! Увійди, щоб побачити персональне привітання»

// Якщо користувач залогінений (isLoggedIn === true):
// 0–5 годин → «Доброї ночі, {name}! 🌙»
// 6–11 годин → «Доброго ранку, {name}! ☀️»
// 12–17 годин → «Доброго дня, {name}! 👋»
// 18–23 годин → «Доброго вечора, {name}! 🌆»

// Вимоги:

// Використовуй тернарний оператор (можна вкладені тернарники)
// Можна використовувати кілька тернарників поспіль
// Емодзі додай прямо в рядок
// Якщо хочеш — додай умовний колір тексту залежно від пори доби (наприклад через className)

interface GreetingTimeProps {
  name: string;
  hour: number;
  isLoggedIn: boolean;
}

export function GreetingTime({ name, hour, isLoggedIn }: GreetingTimeProps) {
  return (
    <>
      <p>
        {isLoggedIn
          ? hour >= 0 && hour <= 5
            ? `Доброї ночі, ${name}`
            : hour >= 6 && hour <= 11
              ? `Доброї ранку, ${name}`
              : hour >= 12 && hour <= 17
                ? `Доброї дня, ${name}`
                : hour >= 18 && hour <= 23
                  ? `Доброї вечора, ${name}`
                  : `Привіт ${name}`
          : "Привіт, гість! Увійди, щоб побачити персональне привітання"}
      </p>
    </>
  );
}

//! Задача: Лічильник настрою (Mood Counter)
// Створи компонент MoodTracker
// Він повинен мати:

// кнопку «+ гарний настрій»
// кнопку «+ поганий настрій»
// кнопку «Скинути»

// показувати поточний стан:
// скільки разів натиснули «гарний»
// скільки разів натиснули «поганий»
// підсумок: який настрій перемагає зараз
import { FaRegSmile } from "react-icons/fa";
import { ImSad } from "react-icons/im";
import { RiResetRightLine } from "react-icons/ri";
import { useState } from "react";

export function MoodTracker() {
  const [goodstate, setGoodState] = useState(0);
  const [badstate, setBadState] = useState(0);

  return (
    <div>
      <div className={css.textwrap}>
        <p>Лічильник гарного настрою, натиснуто: {goodstate} разів</p>
        <p>Лічильник поганого настрою, натиснуто: {badstate} разів</p>

        {goodstate === 0 && badstate === 0 ? (
          <p>Поки що нічого не вибрано...</p>
        ) : goodstate > badstate ? (
          <p className={css.goodstate}>Гарний настрій перемагає 😊</p>
        ) : badstate > goodstate ? (
          <p className={css.badstate}>Поганий настрій перемагає 😔</p>
        ) : (
          <p>Настрій рівний 🤷‍♂️</p>
        )}
      </div>

      <div className={css.buttons}>
        <button
          className={css.btnplus}
          onClick={() => setGoodState(goodstate + 1)}
        >
          <FaRegSmile />
        </button>

        <button
          className={css.btnminus}
          onClick={() => setBadState(badstate + 1)}
        >
          <ImSad />
        </button>

        <button
          className={css.btnreset}
          onClick={() => {
            setGoodState(0);
            setBadState(0);
          }}
        >
          <RiResetRightLine />
        </button>
      </div>
    </div>
  );
}

//! Задача: Компонент «ToggleButton»
import { PiCursorClickBold } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export function ToggleButton() {
  const [state, setState] = useState(true);

  return (
    <div className={css.twobox}>
      <div>
        <button className={css.togbtn} onClick={() => setState(!state)}>
          <PiCursorClickBold />
        </button>
      </div>

      <div className={css.moon}>
        {state ? (
          <MdOutlineWbSunny style={{ color: "#ffb700" }} />
        ) : (
          <IoMoonOutline style={{ color: "blue" }} />
        )}
      </div>
    </div>
  );
}

//! Завдання: Лічильник з привітанням
// Створи два компоненти:

// Counter — головний компонент, який має:
// useState для числа (починається з 0)
// дві кнопки: "+1" і "Скинути"
// передає поточне число через props в компонент Greeting

// Greeting — приймає пропс count і показує один з трьох текстів:
// якщо count === 0 → "Привіт! Натискай кнопки :)"
// якщо count > 0 і count ≤ 5 → "Вау, вже {count} кліків!"
// якщо count > 5 → "Ти просто монстр кліків! 🔥 {count}"

// Привіт! Натискай кнопки :)
// [ +1 ]  [ Скинути ]

// (після 3 кліків)
// Вау, вже 3 кліків!
// [ +1 ]  [ Скинути ]

import { FaPlus } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

// useState allredy called

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.wrapcou}>
      <button className={css.btnplus} onClick={() => setCount(count + 1)}>
        <FaPlus />
      </button>
      <button className={css.btnreset} onClick={() => setCount(0)}>
        <GrPowerReset />
      </button>

      <Greeting count={count} />
    </div>
  );
}

export function Greeting({ count }: { count: number }) {
  return (
    <div>
      {count === 0
        ? "Привіт! Натискай кнопки :)"
        : count <= 5
          ? `Вау, вже ${count} кліків!`
          : `Ти просто монстр кліків! 🔥 ${count}`}
    </div>
  );
}

// !Тобі потрібно зробити один компонент, який називається Вітання.
// Цей компонент повинен вміти показувати різні привітання залежно від того, кому ти його «даруєш».

interface HelloProrps {
  name: "Мамо" | "Тато";
  mood: "😊" | "😎" | "🥱";
}

export function Hello({ name, mood }: HelloProrps) {
  return (
    <div>
      <p>
        Привіт, {name}! {mood}
      </p>
    </div>
  );
}

//! Міні-задача
// Напиши тернарний вираз, який показує:

// якщо age >= 18 → "Повнолітній"
// інакше → "Неповнолітній"

// (можна просто словами або коротким кодом)

// useState allredy called
export function Checker() {
  return (
    <div>
      <p id="result">Сіко тобі: </p>
      <input type="text" id="ageinput" placeholder="Put your age" />
      <button
        onClick={() => {
          const input = document.getElementById("ageinput") as HTMLInputElement;
          const resultEl = document.getElementById("result");

          if (!input || !resultEl) return; // захист від null

          const value = input.value.trim();

          const age = Number(value);

          if (isNaN(age) || value === "") {
            resultEl.textContent = "Введи нормальне число";
            return;
          }

          const message = age >= 18 ? "Повнолітній" : "Неповнолітній";
          resultEl.textContent = message;
        }}
      >
        Check
      </button>
    </div>
  );
}

//! Рівень 1 — базові компоненти + props + стилі
// Лічильник (Counter)
// Створи компонент Counter, який показує число та має дві кнопки: +1 і -1.
// Додай третю кнопку Reset → повертає до 0.
//

import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

export function Calcul() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <p>{counter}</p>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCounter(counter + 1)}>
          <GoPlus />
        </button>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          <AiOutlineMinus />
        </button>
        <button onClick={() => setCounter(0)}>RESET</button>
      </div>
    </div>
  );
}

//! Перемикач теми(Theme Toggle)
// Компонент з кнопкою «Dark / Light».
// При натисканні змінюється клас на body (або на головному div) → dark-mode / light-mode.
// Зберігай поточну тему в useState.

// import css from "./traning.module.css"

export function Toggle() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={css.mmm_wrap}>
      {theme ? (
        <div className={css.li_wrap}>Day</div>
      ) : (
        <div className={css.bl_wrap}>Night</div>
      )}

      <button className={css.fir_btn} onClick={() => setTheme(!theme)}>
        Change Theme
      </button>
    </div>
  );
}

//! Like / Unlike кнопка(як у Twitter / Instagram)
// Кнопка показує ❤️ + число лайків.
// При натисканні число +1 і серце стає червоним (або навпаки).
// Додай пропс initialLikes (щоб можна було передати початкове значення).

export function LikeCounter() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>Push ❤️</button>
      <p> Кількість лайків: {like}</p>
    </div>
  );
}

//!

// const users = [
//   {
//     id: 1,
//     name: "Олена",
//     age: 18,
//     role: "Admin",
//   },
//   {
//     id: 2,
//     name: "Андрій",
//     age: 16,
//     role: "User",
//   },
//   {
//     id: 3,
//     name: "Марія",
//     age: 22,
//     role: "User",
//   },
//   {
//     id: 4,
//     name: "Іван",
//     age: 31,
//     role: "Editor",
//   },
// ];

//! 1. Проєкт: "Калькулятор чайових" (Робота зі станом та JSX)
// Ціль: Навчитися використовувати хук useState, обробляти події інпутів та робити умовний рендеринг.

// Функціонал:
// Поле для введення суми рахунку.
// Кнопки для вибору відсотка чайових (10%, 15%, 20%).
// Поле для введення кількості людей (щоб розділити рахунок).
// Результат: сума чайових на людину та загальна сума на людину.
// Умова: Якщо кількість людей дорівнює 0 або менше, показувати повідомлення про помилку під інпутом (умовний рендеринг).

export function TipsCalc() {
  const [tips, setTips] = useState(0);
  const [person, setPerson] = useState(0);
  const [suma, setSuma] = useState(0);

  const result = (suma + suma * tips) / person;

  return (
    <div>
      <label>
        Сума рахунку
        <input
          onChange={(event) => setSuma(Number(event.target.value))}
          value={suma}
          type="text"
          name=""
          id=""
          placeholder="Сума рахунку"
        />
      </label>
      <label>
        Кількість людей
        <input
          onChange={(event) => setPerson(Number(event.target.value))}
          value={person}
          type="text"
          name=""
          id=""
          placeholder="Кількість людей"
        />
      </label>
      <button onClick={() => setTips(0.1)}>Tips: 10%</button>
      <button onClick={() => setTips(0.15)}>Tips: 15%</button>
      <button onClick={() => setTips(0.2)}>Tips: 20%</button>
      <p>Result: {result}</p>
    </div>
  );
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

export function Form() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username");
    console.log(username);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

// ? Завдання
// Створи форму, яка складається з двох полів:

// ім'я (text)
// вік (number)

// При натисканні кнопки "Показати" під формою має з'явитися один рядок тексту:
// "Привіт, [ім'я]! Тобі [вік] років"
// Якщо якесь поле порожнє — замість нього показуй слово "не вказано".
// Приклади результату:

// Ім'я: Оля, Вік: 19 → "Привіт, Оля! Тобі 19 років"
// Ім'я: (порожньо), Вік: 7 → "Привіт, не вказано! Тобі 7 років"
// Ім'я: Максим, Вік: (порожньо) → "Привіт, Максим! Тобі не вказано років"

export function FirstForm() {
  const handleSubmit = (formData: FormData) => {
    const nameuser = formData.get("username") as string;
    const ageuser = formData.get("userage");

    if (nameuser && ageuser) {
      console.log(`Привіт: ${nameuser}, Тобі ${ageuser} років!`);
    } else {
      console.log("Введи дані");
    }
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input
          type="text"
          name="username"
          defaultValue="John Doe"
          id=""
          placeholder="Імя"
          required
        />
        <input type="number" name="userage" id="" placeholder="Вік" required />

        <button type="submit">Show</button>
      </form>
    </div>
  );
}

// !!!!

export function OrderForm() {
  const handleOrder = (formData: FormData) => {
    const restrictions = formData.getAll("restrictions") as string[];
    console.log("Dietary restrictions:", restrictions);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

// !!!
import { useId } from "react";

export function OrderFormm() {
  const selectId = useId();

  const handleOrder = (formData: FormData) => {
    const deliveryTime = formData.get("deliveryTime") as string;
    console.log("Preferred delivery time:", deliveryTime);
  };

  return (
    <form action={handleOrder}>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}

// ????????????????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import axios from "axios";
// import { useState } from "react";

interface ZaprosUser {
  name: string;
  username: string;
  email: string;
}

export function MyZapros() {
  const [inputId, setInputId] = useState(""); // що ввів користувач
  const [user, setUser] = useState<ZaprosUser | null>(null); // дані користувача або null
  const [loading, setLoading] = useState(false); // показуємо "завантаження..."
  const [error, setError] = useState<string | null>(null); // помилка, якщо щось пішло не так

  const handleSearch = async () => {
    const id = Number(inputId.trim());

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      setUser(response.data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>Пошук користувача за ID</h3>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="Введи ID (1–10)"
          style={{ padding: "8px", width: "120px", marginRight: "12px" }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{ padding: "8px 16px" }}
        >
          {loading ? "Завантаження..." : "Знайти"}
        </button>
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {loading && !error && <p>Завантажуємо користувача...</p>}

      {user && !loading && !error && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <p>Ім'я: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      {!user && !loading && !error && (
        <p style={{ color: "#666" }}>
          Введи ID від 1 до 10 та натисни «Знайти»
        </p>
      )}
    </div>
  );
}

// ! localStorage

import { useEffect } from "react";

export function Local() {
  // Ініціалізуємо стан значенням з localStorage (лінива ініціалізація)
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
  });

  // Зберігаємо значення в localStorage при кожній зміні clicks
  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <p>You clicked {clicks} times</p>
      <button onClick={() => setClicks(clicks + 1)}>Click me</button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}

//! Задача 1: Картка користувача (JSX, Props, Styles)
// Умова: Створи компонент UserCard.
// Він має приймати через пропси: name, email, avatarUrl та булеве значення isOnline.
// Якщо isOnline — true, навколо аватара має бути зелена рамка, якщо false — червона.
// Використай React Icons (наприклад, MdEmail), щоб додати іконку біля пошти.
// Стилізуй за допомогою композиції класів (наприклад, через бібліотеку clsx або просто шаблоні рядки).

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl: string;
  isOnline: boolean;
}

import { MdEmail } from "react-icons/md";

export function UserCard({ name, email, avatarUrl, isOnline }: UserCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>
        <MdEmail /> {email}
      </p>

      {isOnline ? (
        <p className={css.online}>
          User в <strong>online</strong>
        </p>
      ) : (
        <p className={css.offline}>
          User <strong>offline</strong>
        </p>
      )}

      <img
        src={avatarUrl}
        className={isOnline ? css.photo_user_online : css.photo_user_offline}
        alt="User"
      />
    </div>
  );
}

//! Задача 2: Список покупок (Collections, Keys)
// Умова: Маємо масив об'єктів items = [{id: 1, name: 'Milk', price: 20}, ...].

// Рендери список покупок.

// Не забудь про унікальні key.

const baza = [
  { id: 1, name: "Milk", price: 20 },
  { id: 2, name: "Egg", price: 110 },
  { id: 3, name: "Flower", price: 120 },
  { id: 4, name: "Chocolate", price: 240 },
  { id: 5, name: "Sugar", price: 90 },
];

export function Product() {
  return baza.map((el) => {
    return (
      <div key={el.id}>
        <p>{el.id}</p>
        <p>{el.name}</p>
        <p>{el.price}</p>
      </div>
    );
  });
}

//! Задача 3: Перемикач мови (useState, Reactivity)
// Умова: Створи компонент LanguageSwitcher.
// Є стан lang (початкове значення "uk").
// Є дві кнопки: "Українська" та "English".

// При кліку на кнопку стан змінюється, і в заголовку h1 текст міняється відповідно: "Привіт!" або "Hello!".

export function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      {lang === "en" ? <h1>Hello</h1> : <h1>Привіт</h1>}
      <button onClick={() => setLang("ua")}>Українська</button>
      <button onClick={() => setLang("en")}>English</button>
    </div>
  );
}
