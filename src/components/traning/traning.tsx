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
