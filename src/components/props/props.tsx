//! Умова:
// Створи компонент Message, який приймає проп text
// і рендерить його всередині <p>.

// В App передай:

// export default function Props() {
//   const text = { id: 1, descr: "my prop 1" };

//   return (
//     <div>
//       <p>
//         Id: {text.id}, Content: {text.descr}
//       </p>
//     </div>
//   );
// }

//! Умова:

// Створи компонент User, який приймає:
// 	•	name
// 	•	age

// І показує:

// const Props = ({ name, age }: { name: string; age: number }) => {
//   return (
//     <div>
//       <p>
//         Мене звати {name}, мені {age} років
//       </p>
//     </div>
//   );
// };

// export default Props;

//! ✅ 3️⃣ Кнопка з текстом
// Умова:
// Створи компонент Button, який приймає проп label.

// Використай його 3 рази:
// 	•	OK
// 	•	Cancel
// 	•	Delete

// interface propsProps {
//   label: string;
// }

// export default function Props({ label }: propsProps) {
//   return (
//     <div>
//       <button>{label}</button>
//     </div>
//   );
// }

//! ✅ 4️⃣ Картка продукту
// Умова:
// Створи компонент Product, який приймає:
// 	•	title
// 	•	price

// і рендерить:
// Iphone
// Ціна: 1000$

// interface propsProps {
//   title: string;
//   price: string;
// }

// export default function Props({ title, price }: propsProps) {
//   return (
//     <>
//       <div>
//         <p>Name: {title}</p>
//         <p>Price: {price}</p>
//       </div>
//     </>
//   );
// }

//! ✅ 5️⃣ Передача boolean
// Умова:
// Створи компонент Status, який приймає:
// 	•	isOnline (boolean)

// Якщо true → показати “Online”
// Якщо false → “Offline”

// interface Status {
//   isOnline: boolean;
// }

// export default function Props({ isOnline }: Status) {
//   return (
//     <>
//       <div>
//         <p style={{ color: isOnline ? "green" : "red" }}>
//           {isOnline ? "Online" : "Offline"}
//         </p>
//       </div>
//     </>
//   );
// }

//! ✅ 6️⃣ Передача функції через props

// Умова:
// 	•	Створи компонент ActionButton
// 	•	Приймає два пропси:
// 	•	label (string) — текст кнопки
// 	•	onClick (function) — функція, яка виконується при натисканні
// 	•	В App використай 3 кнопки:
// 	•	OK → показує alert “OK clicked”
// 	•	Cancel → alert “Cancel clicked”
// 	•	Delete → alert “Delete clicked”

// interface Status {
//   label: string;
//   onClick: () => void;
// }

// export default function Props({ label, onClick }: Status) {
//   return (
//     <>
//       <div>
//         <button onClick={onClick}>{label}</button>
//       </div>
//     </>
//   );
// }
