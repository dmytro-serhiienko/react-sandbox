import css from "./startpage.module.css";
import { FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

interface User {
  name: string;
}

export default function Start({ name }: User) {
  return (
    <div>
      <div className={css.fortwo}>
        <h1 className={css.title}>Hello, I’m {name} 👋</h1>
        <div className={css.content}>
          <div>
            <FaReact className={css.icon} />
          </div>
          <ul className={css.list}>
            <li className={css.item}>React practice.</li>
            <li className={css.item}>Clean code.</li>
            <li className={css.item}>Continuous progress.</li>
          </ul>
        </div>
      </div>

      <a className={css.down} href="">
        <FaAnglesDown />
      </a>
    </div>
  );
}
