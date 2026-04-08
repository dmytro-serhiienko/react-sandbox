// Лічильник з кроком: Створіть кнопки "+" та "-", а також поле вводу (input), де користувач може вказати, на скільки саме змінювати значення (наприклад, +5 або -10).

import { useState } from "react";

export function Counterr() {
  const [number, setNumber] = useState(0);

  const plusClick = () => {
    setNumber((number) => number + 1);
  };

  const minusClick = () => {
    setNumber((number) => number - 1);
  };

  const resetClick = () => {
    setNumber(0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <p>{number}</p>
      <button type="button" onClick={plusClick}>
        +
      </button>
      <button type="button" onClick={minusClick}>
        -
      </button>
      <button type="button" onClick={resetClick}>
        Reset
      </button>
    </div>
  );
}
