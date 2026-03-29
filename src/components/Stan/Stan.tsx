import css from "./Stan.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Stan() {
  const [name, setName] = useState("сторінка");

  return (
    <div className={css.stan}>
      <h1 className={css.title}>
        Ти зараз тут: <span className={css.accent}>{name}</span>
      </h1>

      <div className="btn-group" role="group">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setName("About")}
        >
          About
        </button>
        <button
          className="btn btn-primary "
          type="button"
          onClick={() => setName("Projects")}
        >
          Projects
        </button>
        <button
          className="btn btn-primary "
          type="button"
          onClick={() => setName("Contacts")}
        >
          Contacts
        </button>
      </div>
    </div>
  );
}
