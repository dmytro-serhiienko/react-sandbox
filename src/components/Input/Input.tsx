import { useState } from "react";

export function Input() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, inputValue]);
  };

  return (
    <div>
      <input
        type="text"
        name="inpVale"
        id=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        ADD
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
