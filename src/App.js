import "./App.css";
import pizzaData from "./pizzas.json";
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
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} key={pizza.name} />;
        })}
      </ul>
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
  const { name, ingredients, photoName, price } = props.pizzaObj;
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{(parseFloat(price.toFixed(2)) + 3).toFixed(2)}</span>
      </div>
    </li>
  );
}

export default App;
