import css from "./App.module.css";
// import Show from "./components/reactivity/practice-reactivity";
// import Props from "./components/props/props";

// import Mix from "./components/mix/mix";
// import UserCard from "./components/mix/mix";
import ProductItem from "./components/mix/mix";

function App() {
  return (
    <div>
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
