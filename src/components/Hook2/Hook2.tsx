// Створіть компонент, який дозволяє користувачу вводити своє ім'я та вік, а потім відображає ці дані в реальному часі.

import { useState } from "react";

// Вимоги:
// Створіть два стани: один для імені (рядок), інший для віку (число або рядок).
// Додайте два текстових поля (<input>):
// Перше для введення імені.
// Друге для введення віку.
// Під полями вводу має виводитися текст у форматі: "Привіт, [Ім'я]! Тобі [Вік] років."
// Додайте кнопку "Очистити", яка скидає обидва поля до початкових значень.

export function Hook2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label>
        Name
        <input name="name" type="text" value={name} onChange={changeName} />
      </label>

      <label>
        Age
        <input name="age" type="text" value={age} onChange={changeAge} />
      </label>
      <p>
        Привіт {name}!. Тобі {age} років.{" "}
      </p>
    </div>
  );
}
