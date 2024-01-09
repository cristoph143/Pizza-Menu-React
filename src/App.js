import "./App.css";
import pizzas from "./pizzas.json";
import React from "react";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pepperoni"
        ingredients="Pepperoni, Tomato Sauce, Mozzarella"
        price={12.99}
        photoName="pizzas/pepperoni_pizza.jpg"
      />
      <Pizza
        name="BBQ"
        ingredients="BBQ, Tomato Sauce, Mozzarella"
        price={30.21}
        photoName="pizzas/bbq_chicken_pizza.jpg"
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour > openHour && hour < closeHour) {
  //   alert("We're Currently open");
  // } else {
  //   alert("We're currently closed");
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleDateString}We're currently open!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

export default App;
