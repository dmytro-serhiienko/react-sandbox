import css from "./App.module.css";
// import Show from "./components/reactivity/practice-reactivity";
// import Props from "./components/props/props";

// import Mix from "./components/mix/mix";
// import UserCard from "./components/mix/mix";
// import ProductItem from "./components/mix/mix";

// import Start from "./components/startpage/startpage";
// import StatusLabel from "./components/traning/traning";
// import { GreetingTime } from "./components/traning/traning";
// import { MoodTracker } from "./components/traning/traning";
// import { ToggleButton } from "./components/traning/traning";
// import { Counter } from "./components/traning/traning";
// import { Hello } from "./components/traning/traning";
// import { Checker } from "./components/traning/traning";
// import { Calcul } from "./components/traning/traning";
// import { Toggle } from "./components/traning/traning";
// import { LikeCounter } from "./components/traning/traning";
// import { TipsCalc } from "./components/traning/traning";
// import { Form } from "./components/traning/traning";
// import { FirstForm } from "./components/traning/traning";
// import { OrderForm } from "./components/traning/traning";
// import { OrderFormm } from "./components/traning/traning";
// import { MyZapros } from "./components/traning/traning";
// import { Local } from "./components/traning/traning";
// import { UserCard } from "./components/traning/traning";
// import { Product } from "./components/traning/traning";
// import { LanguageSwitcher } from "./components/traning/traning";
// import { MyFirstForm } from "./components/forms/forms";
// import { ReviewForm } from "./components/forms/forms";
// import { RegisterOnEvent } from "./components/forms/forms";
// import { SearchUser } from "./components/search/search";
// import { SimpleForm } from "./components/forms/forms";

// ! QueryClient

// import { JApiFn, RickFn } from "./components/Api/Api";
// import { Forma } from "./components/Formik/Formik";

// import { Shukai } from "./components/Api/Api";

// import { Shukai2 } from "./components/Api/Api";
// import { ApiShow } from "./components/Api/Api";
import { ShowPost } from "./components/Api/Api";
import { Apishka } from "./components/Ban/Ban";
import { Form1 } from "./components/Form1/Form1";
import { AutorizeForm } from "./components/Autoriz/Autoriz";
import { ShowAva } from "./components/Autoriz/AutorizShow";
import { Poshuk1 } from "./components/Poshuk1/poshuk1";
import { Poshuk2 } from "./components/Poshuk2/Poshuk2";
import { Formik2 } from "./components/Formik2/Formik2";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { Formik3 } from "./components/Formik3/Formik3";
import { Formik4 } from "./components/Formik4/Formik4";
import { Toaster } from "react-hot-toast";
import { Advice } from "./components/Advise/Advice";
import { Mut } from "./components/Mutation/Mutatiom";
import { Busco } from "./components/Busco/Busco";
import { Mostra } from "./components/Mostra/Mostra";
import Modal2 from "./components/Modal2/Modal2";
import { Modal3 } from "./components/Modal3/Modal3";
import { Weather } from "./components/Weather/Weather";
import { InputForm } from "./components/Einput/Einput";
import { Modal4 } from "./components/Modal4/Modal4";
import { Input } from "./components/Input/Input";
import { Stan } from "./components/Stan/Stan";
import { Counterr } from "./components/Hook/Hook";
import { Hook2 } from "./components/Hook2/Hook2";
import { Modal5 } from "./components/Modal5/Modal5";
import { Zus1 } from "./components/zus1/Zus1";
import { Zus2 } from "./components/zus2/Zus2";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={css.weather1}>
        <Weather />
      </div>

      <div className={css.modal4}>
        <Modal4 />
      </div>

      <div className={css.autorize}>
        <Stan />
      </div>

      <div className={css.autorize}>
        <Input />
      </div>

      <div className={css.autorize}>
        <Zus1 />
      </div>

      <div className={css.modal4}>
        <Zus2 />
      </div>

      <div className={css.modal4}>
        <Counterr />
      </div>

      <div className={css.modal4}>
        <Modal5 />
      </div>

      <div className={css.modal4}>
        <Hook2 />
      </div>

      <div>
        <div className={css.autorize}>
          <AutorizeForm />
          <ShowAva />
        </div>
        <div className={css.f4_wrap}>
          <Formik4 />
          <Toaster />
        </div>
        <div>
          <InputForm />
        </div>
        <div className={css.posh}>
          <Formik3 />
        </div>
        <div className={css.modal3}>
          <Modal3 />
        </div>
        <div>
          <Modal2 />
        </div>
        <div>
          <Busco />
        </div>
        <div>
          <Advice />
        </div>
        <div className={css.mostra}>
          <Mostra />
        </div>
        <div className={css.posh}>
          <Formik2 />
        </div>
        <div>
          <Mut />
        </div>
        {/* MODAL */}
        <div>
          {/* Кнопка просто міняє false на true */}
          <button onClick={() => setOpen(true)}>Відкрити вікно</button>
          {/* Підключаємо модалку і передаємо стан */}
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <h2>Успіх!</h2>
            <p>Я працюю в окремому файлі.</p>
          </Modal>
        </div>
        {/*  */}
        <div>
          <Poshuk2 />
        </div>
        <div className={css.posh}>
          <Poshuk1 />
        </div>{" "}
        <Form1 />
        {/* <Shukai2 /> */}
        {/* <ApiShow /> */}
        <Apishka />
        <ShowPost />
        {/* <Shukai /> */}
      </div>
      {/* <div>
        <RickFn />
      </div>
      <div>
        <Forma />
      </div>
      <div>
        <JApiFn />
      </div> */}

      <div>{/* <Forma /> */}</div>
      {/* <div className={css.start}>
        <Start name="Dmytro" />
      </div>
      <div>
        <Checker />
      </div>
      <div className={css.wrap_prod}>
        <ProductItem
          title="Iphone 19"
          price={999}
          currency="USD"
          isNew={true}
          discountPercent={10}
          category="electronics"
        />
        <ProductItem
          title="AirFry Ninja"
          price={1500}
          isNew={false}
          category="electronics"
        />
        <ProductItem
          title="Mercedes-Benz E220"
          price={55000}
          currency="EUR"
          isNew={true}
          category="electronics"
        />
      </div>
      <div>
        <Hello name="Мамо" mood="😊" />
        <Hello name="Тато" mood="😎" />
      </div>
      <div className={css.wrapcou}>
        <Counter />
      </div>
      <div className={css.mycontainer}>
        <StatusLabel isActive={true} />
        <StatusLabel isActive={false} />
      </div>
      <div className={css.greetcontainer}>
        <GreetingTime name="Dima" hour={3} isLoggedIn={true} />
      </div>
      <div className={css.trackerwrap}>
        <MoodTracker />
      </div>
      <div className={css.mywrp}>
        <ToggleButton />
      </div>
      <div className={css.wrapcou}>
        <Calcul />
      </div>
      <div className={css.mywrp}>
        <Toggle />
      </div>
      <div className={css.wrapcou}>
        <LikeCounter />
      </div>
      <div className={css.mywrp}>
        <TipsCalc />
      </div>
      <div>
        <Form />
      </div>
      <div className={css.wrapcou}>
        <FirstForm />
      </div>
      <div className={css.mywrp}>
        <OrderForm />
      </div>
      <div className={css.wrapcou}>
        <OrderFormm />
      </div>
      <div>
        <MyZapros />
      </div>
      <div className={css.wrapcou}>
        <Local />
      </div>
      <div className={css.mywrp}>
        <UserCard
          name="Biba"
          email="biba@mail.com"
          avatarUrl="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?semt=ais_hybrid&w=740&q=80"
          isOnline={true}
        />
      </div>
      <div className={css.wrapcou}>
        <Product />
      </div>
      <div className={css.mywrp}>
        <LanguageSwitcher />
      </div>
      <div className={css.wrapcou}>
        <MyFirstForm />
        <MyFirstForm />
      </div>
      <div className={css.trackerwrap}>
        <ReviewForm />
      </div>
      <div className={css.wrapppp}>
        <RegisterOnEvent />
      </div>
      <div className={css.trackerwrap}>
        <SearchUser />
      </div>

      <div className={css.wrapcou}>
        <SimpleForm />
      </div> */}
      {/*<UserCard
        name="Bob"
        age={23}
        isOnline={true}
        profession="student"
        hobbies={["cars", "girls"]}
      />
      <UserCard
        name="Amely"
        age={33}
        isOnline={false}
        hobbies={["cosmetics", "cinema"]}
      />
      <Mix name="Дмитро" mood="гарний" />
      <Mix name="Василь" />
      <Show />
      <Show />
      <Show />
      <Show />
      <Show />
      <Props /> */}
    </div>
  );
}

export default App;
