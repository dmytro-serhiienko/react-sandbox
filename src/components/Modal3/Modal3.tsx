import { useState } from "react";
import css from "./Modal3.module.css";

export function Modal3() {
  const [state, setOpen] = useState(false);

  return (
    <div className={css.general}>
      <h1>Спробуй удачу</h1>
      <button className={css.btn1} type="button" onClick={() => setOpen(true)}>
        Удачі!
      </button>

      {state && (
        <div className={css.overlay}>
          <div className={css.content}>
            <h2>
              Вітаю, ви переможець і отримуєте <span>Автомобіль</span>
            </h2>
            <button
              className={css.btn}
              type="button"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
