import { useState } from "react";
import css from "./Modal2.module.css";

function Modal2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.container}>
      <h1>Мій додаток</h1>
      <button onClick={() => setIsOpen(true)}>Відкрити модалку</button>

      {isOpen && (
        <div className={css.modal_overlay}>
          <div className={css.modal_content}>
            <h2>Модальне вікно</h2>
            <p>Логіка працює, а стилі тепер у CSS файлі!</p>
            <button onClick={() => setIsOpen(false)}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal2;
