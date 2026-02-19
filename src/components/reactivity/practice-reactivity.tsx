// import css from "./practice-reactivity.css";

// import { ImRss } from "react-icons/im";

// // 1. Імпортуємо функцію useState
// import { useState } from "react";

// export default function App() {
//   // 2. Оголошуємо стан clicks
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // 3. Використовуємо setClicks для зміни стану clicks
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

//! ✅ Задача 1 — Показати / Сховати текст

// Умова:
// Створи компонент, в якому:
// 	•	є кнопка
// 	•	є текст: Привіт React
// 	•	при натисканні кнопки текст зникає
// 	•	при повторному натисканні — з’являється

// 💡 Підказка: тобі потрібен boolean (true / false)

// import { useState } from "react";

// export default function Content() {
//   const [isVisible, setIsVisible] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Push</button>{" "}
//       {isVisible && <h1>Привіт React</h1>}
//     </div>
//   );
// }

//! ✅ Задача — Лічильник
// Умова:
// 	1.	Початкове число: 0
// 	2.	Є кнопка “Додати”
// 	3.	Коли натискаєш кнопку, число збільшується на 1
// 	4.	Число має показуватись в <h1>

// 💡 Підказки:
// 	•	Тобі потрібен стан для числа
// 	•	Кнопка має onClick, де ти викликаєш setState

// import { useState } from "react";

// export default function Calc() {
//   const [actCalc, addCalc] = useState(0);

//   return (
//     <div>
//       <h1>Number: {actCalc}</h1>
//       <button onClick={() => addCalc(actCalc + 1)}>push</button>
//     </div>
//   );
// }

//! ✅ Задача — Показати “Hello”

// Умова:
// 	1.	Є кнопка “Показати/Сховати”
// 	2.	Є текст: Hello
// 	3.	Коли натискаєш кнопку:
// 	•	якщо текст показаний → зникає
// 	•	якщо текст схований → з’являється

// 💡 Підказки:
// 	•	Тобі потрібен boolean стан, який контролює видимість тексту
// 	•	JSX: використовуєш {state && <h1>Hello</h1>}
// 	•	Кнопка: onClick змінює стан на протилежний (true → false, false → true)

// import { useState } from "react";

// export default function Show() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Показати/Сховати</button>
//       {isVisible && <h1>Hello</h1>}
//     </div>
//   );
// }

//! 1️⃣ Ввід тексту (реактивний інпут)
// 	•	Є <input>
// 	•	Під ним <p>
// 	•	Коли ти вводиш щось у інпут — <p> автоматично показує те ж саме, що і ти ввів

// 💡 Тут теж useState, але тип стану — рядок

// import { useState } from "react";
// import style from "./Dima.module.css";

// export default function Show() {
//   const [startStan, writeStan] = useState("");

//   return (
//     <div>
//       <h1 className={style.title}>Практика на рядок</h1>
//       <input type="text" onChange={(e) => writeStan(e.target.value)} />
//       {}
//       <p className={style.text}>{startStan}</p>
//     </div>
//   );
// }

//! 2️⃣ Зміна кольору
// 	•	Є кнопка “Змінити колір”
// 	•	Є блок <div> або <h1>
// 	•	Коли натискаєш кнопку — колір тексту змінюється на інший

// 💡 Тут стан може зберігати колір ("red", "blue" …)

// import { useState } from "react";

// export default function Show() {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
//         Colorize
//       </button>

//       <h1 style={{ color: color }}>Hardcore</h1>
//     </div>
//   );
// }

//! 3️⃣ Лічильник лайків
// 	•	Є кнопка ❤️ “Like”
// 	•	Поруч показує число лайків
// 	•	Кожен клік збільшує число на 1

// 💡 Як калькулятор, але трохи візуально цікавіше

// import { useState } from "react";
// import style from "./Dima.module.css";

// export default function Show() {
//   const [actualLikes, addLikes] = useState(0);

//   return (
//     <div>
//       <button className={style.btn} onClick={() => addLikes(actualLikes + 1)}>
//         ❤️
//       </button>
//       <p>Number of likes: {actualLikes}</p>
//     </div>
//   );
// }

//!*? 1️⃣ Лічильник “+1 / -1”
// 	•	Початкове число = 0
// 	•	Дві кнопки: “+1” і “-1”
// 	•	При кліку на кнопки число змінюється відповідно
// 	•	Показуємо число в <h1>

// 💡 Тут тренуємо числовий стан та onClick.

// import { useState } from "react";
// // import style from "./Dima.module.css";
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";
// import { GrPowerReset } from "react-icons/gr";

// export default function Show() {
//   const [curentNum, addNumber] = useState(0);

//   return (
//     <div>
//       <h1>Number: {curentNum}</h1>
//       <button onClick={() => addNumber(curentNum + 1)}>
//         <FaPlus />
//       </button>
//       <button onClick={() => addNumber(curentNum > 0 ? curentNum - 1 : 0)}>
//         <FaMinus />
//       </button>
//       <button onClick={() => addNumber(0)}>
//         <GrPowerReset />
//       </button>
//     </div>
//   );
// }

//! 2️⃣ Показати/сховати текст
// 	•	Кнопка “Показати/Сховати”
// 	•	Текст <p>Hello World</p>
// 	•	При кліку текст зникає або з’являється

// 💡 Тут тренуємо булевий стан (true/false).

// import { useState } from "react";
// // import style from "./Dima.module.css";

// export default function Show() {
//   const [isVisible, changeVisible] = useState(true);

//   return (
//     <div>
//       <button onClick={() => changeVisible(!isVisible)}>
//         сховати або показати
//       </button>

//       {isVisible && <p>Hello World</p>}
//     </div>
//   );
// }

//! 3️⃣ Реактивний інпут
// 	•	<input> для введення тексту
// 	•	<p> під інпутом показує те, що ти вводиш
// 	•	Автоматично оновлюється при кожному введенні

// 💡 Тут тренуємо стан рядка і onChange.

// import { useState } from "react";
// // import style from "./Dima.module.css";

// export default function Show() {
//   const [startState, changeState] = useState("");

//   return (
//     <div>
//       <input type="text" onChange={(e) => changeState(e.target.value)} />
//       <p>Ти ввів: {startState}</p>
//     </div>
//   );
// }

//! 1️⃣ Зміна кольору тексту
// 	•	Є <h1>Hello</h1>
// 	•	Є кнопка “Змінити колір”
// 	•	Початковий колір — чорний
// 	•	При кліку змінюється на зелений
// 	•	При наступному кліку — назад на чорний

// 💡 Підказка: тернарник + стан "black" / "green"

// import { useState } from "react";

// export default function Show() {
//   const [startPoint, functionPoint] = useState("black");

//   return (
//     <div>
//       <h1 style={{ color: startPoint }}>Hello</h1>

//       <button
//         onClick={() =>
//           functionPoint(startPoint === "black" ? "green" : "black")
//         }
//       >
//         Змінити колір
//       </button>
//     </div>
//   );
// }

//! 2️⃣ Лічильник кліків кнопки
// 	•	Є кнопка “Click me”
// 	•	Під нею напис:
// Ви натиснули X разів
// 	•	Кожен клік збільшує число

// 💡 Просто useState(0) і +1

// import { useState } from "react";

// export default function Show() {
//   const [state, setState] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setState(state + 1)}>Click me</button>
//       <p>Ви натиснули {state} разів</p>
//     </div>
//   );
// }

//! 3️⃣ Зміна тексту кнопки
// 	•	Початковий текст кнопки: “Login”
// 	•	При кліку змінюється на “Logout”
// 	•	При повторному кліку — назад

// 💡 Тут краще використовувати boolean (true/false)

// import { useState } from "react";

// export default function Show() {
//   const [state, setstate] = useState(true);

//   return (
//     <div>
//       // візьми значення і зроби навпаки
//       <button onClick={() => setstate(!state)}>
//         {" "}
//         {state ? "Login" : "Logout"} // умова ? що показати, якщо умова true :
//         що показати, якщо умова false
//       </button>
//     </div>
//   );
// }

//! 4️⃣ Показати повідомлення, якщо число > 10
// 	•	Є лічильник +
// 	•	Якщо число більше 10 → показати текст:
// "Багато!"

// 💡 {number > 10 && <p>Багато!</p>}

// import { useState } from "react";

// export default function Show() {
//   const [state, setstate] = useState(0);

//   return (
//     <div>
//       <p>{state > 10 ? "Багато" : state}</p>
//       <button onClick={() => setstate(state + 1)}>+</button>
//     </div>
//   );
// }

// ⸻

//! 5️⃣ Дизейбл кнопки
// 	•	Є лічильник +
// 	•	Якщо число дорівнює 5 → кнопка стає disabled

// 💡 <button disabled={number === 5}>

// import css from "./practice-reactivity.module.css";

// import { useState } from "react";
// import { IoMdRadioButtonOn } from "react-icons/io";

// export default function Show() {
//   const [state, setstate] = useState(0);

//   return (
//     <div>
//       <button
//         className={css.mybutton}
//         onClick={() => setstate(state + 1)}
//         disabled={state === 5}
//       >
//         <IoMdRadioButtonOn />
//       </button>
//       <p>{state}</p>
//     </div>
//   );
// }
