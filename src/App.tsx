import "./App.css";
// import Show from "./components/reactivity/practice-reactivity";
// import Props from "./components/props/props";

// import Mix from "./components/mix/mix";
// import UserCard from "./components/mix/mix";
import ProductItem from "./components/mix/mix";

function App() {
  return (
    <div>
      <ProductItem
        title="Iphone 19"
        price={999}
        currency="USD"
        isNew={true}
        discountPercent={10}
        category="electronics"
      />
      <ProductItem
        title="AirFry"
        price={1500}
        isNew={false}
        category="electronics"
      />
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
