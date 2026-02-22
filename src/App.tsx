import css from "./App.module.css";
// import Show from "./components/reactivity/practice-reactivity";
// import Props from "./components/props/props";

// import Mix from "./components/mix/mix";
// import UserCard from "./components/mix/mix";
import ProductItem from "./components/mix/mix";

import Start from "./components/startpage/startpage";
import StatusLabel from "./components/traning/traning";
import { GreetingTime } from "./components/traning/traning";
import { MoodTracker } from "./components/traning/traning";

function App() {
  return (
    <div>
      <div className={css.start}>
        <Start name="Dmytro" />
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
