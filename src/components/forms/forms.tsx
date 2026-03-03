import { useId } from "react";

export function MyFirstForm() {
  const customId = useId();

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("username");
    const surName = formData.get("usersurname");
    const chekUser = formData.get("check");

    console.log(userName);
    console.log(surName);
    console.log(chekUser);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor={`${customId}-name`}>
          Name
          <input type="text" name="username" id={`${customId}-name`} />
        </label>

        <label htmlFor={`${customId}-surname`}>
          Surname
          <input type="text" name="usersurname" id={`${customId}-surname`} />
        </label>

        <label htmlFor={`${customId}-checker`}>
          Age more then 18
          <input type="checkbox" name="check" id={`${customId}-checker`} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// !!!!!
//! Задача: "Опитування про улюблений фрукт"
// Створіть компонент форми, який дозволяє користувачеві вибрати улюблений фрукт та залишити коментар.

// Вимоги до форми:
//* Поле вибору (Select): Виберіть улюблений фрукт (Apple, Banana, Orange).
//* Поле тексту (Textarea): "Чому вам подобається цей фрукт?"
//* Кнопка відправки: "Надіслати".

// Вимоги до логіки (handleSubmit):
// Отримайте дані з форми за допомогою FormData.

// Виведіть отримані дані в консоль у такому форматі:
// { fruit: "значення", reason: "значення" }.

// Додатково (для практики useId):
// Використовуйте useId для коректного зв'язування label з select та textarea.

// import { useId } from "react";
import css from "./forms.module.css";

export function ReviewForm() {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const fruitSelect = formData.get("selectedftuit") as string;
    const fruitWhy = formData.get("why") as string;

    console.log(fruitSelect);
    console.log(fruitWhy);
  };

  return (
    <div>
      <form action={handleSubmit} className={css.wrap}>
        <select name="selectedftuit" id={`${id}-fruit`}>
          <option value="">== Виберіть улюблений фрукт ==</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option>
        </select>

        <label htmlFor={`${id}-why`}>
          <textarea
            name="why"
            id={`${id}-why`}
            placeholder="Чому вам подобається цей фрукт?"
          ></textarea>
        </label>

        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
}

//!!!!!!!!!!!!!!!!!!!!!!!! Задача: "Реєстрація на технічну конференцію"

//* Текстове поле: "Ваше ім'я" (name="fullName", обов'язкове).
//* Поле Email: "Email" (name="email", обов'язкове).

// Перемикачі (Radio buttons): "Ваш рівень знань" (name="level").
// Варіанти: "Junior", "Middle", "Senior".
// Чекбокс: "Згоден з умовами використання" (name="terms", обов'язковий для відмітки).
//Кнопка відправки: "Зареєструватися".
// Вимоги до логіки (handleSubmit):
// Отримайте дані за допомогою FormData.
// Створіть об'єкт з даними.
// Перевірте, чи чекбокс "Згоден з умовами" був відмічений. Якщо ні — виведіть у консоль помилку "Ви повинні погодитися з умовами".
// Якщо все добре, виведіть об'єкт даних у консоль.

export function RegisterOnEvent() {
  const handleSubmit = (formData: FormData) => {
    // const nameValue = formData.get("username");
    // const emailValue = formData.get("useremail");
    // const checkValue = formData.get("usercheck");
    // const radioValue = formData.has("level");

    // console.log(nameValue);
    // console.log(emailValue);
    // console.log(checkValue);
    // console.log(radioValue);

    const data = {
      username: formData.get("username"),
      useremail: formData.get("useremail"),
      radiouser: formData.has("level"),
      checkuser: formData.get("usercheck"),
    };

    localStorage.setItem("storage", JSON.stringify(data));

    alert("Дані збережено!");
  };

  return (
    <div>
      <form className={css.mmm_form} action={handleSubmit}>
        <label>
          Ваше ім'я
          <input type="text" name="username" id="" />
        </label>

        <label>
          Email
          <input type="email" name="useremail" id="" />
        </label>

        <fieldset>
          <legend>Ваш рівень знань</legend>
          <label>
            Junior
            <input type="radio" name="level" value="Junior" id="" />
          </label>
          <label>
            Middle
            <input type="radio" name="level" value="Middle" id="" />
          </label>
          <label>
            Senior
            <input type="radio" name="level" value="Senior" id="" />
          </label>
        </fieldset>

        <label>
          Згоден з умовами використання
          <input type="checkbox" name="usercheck" id="" />
        </label>

        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";

// !!!

export function SimpleForm() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    const danni = JSON.parse(localStorage.getItem("storagge"));
    setStorage(danni);
  }, []);

  console.log(storage);

  const handleSubmit = (formData: FormData) => {
    // const nameValue = formData.get("username");
    // const emailValue = formData.get("useremail");
    // const selectValue = formData.get("userselect");
    // const checkerValue = formData.has("userage");

    // console.log(nameValue);
    // console.log(emailValue);
    // console.log(selectValue);
    // console.log(checkerValue);

    const data = {
      nameValue: formData.get("username"),
      emailValue: formData.get("useremail"),
      selectValue: formData.get("userselect"),
      checkerValue: formData.has("userage"),
    };

    localStorage.setItem("storagge", JSON.stringify(data));
  };

  return (
    <div>
      <form action={handleSubmit}>
        <legend>Username</legend>
        <label>
          <input type="text" name="username" id="" />
        </label>
        <legend>Email</legend>
        <label>
          <input type="email" name="useremail" id="" />
        </label>
        <select name="userselect" id="">
          <option value="">= Your option =</option>
          <option value="Student">Student</option>
          <option value="Worker">Worker</option>
          <option value="Freelancer">Freelancer</option>
        </select>
        <label>
          Вік більше 18
          <input type="checkbox" name="userage" />
        </label>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}
