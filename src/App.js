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
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
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

function Pizza() {
  console.log(pizzas);
  return (
    <div>
      <img src="pizzas/bbq_chicken_pizza.jpg" alt="Pizza BBQ" />
      <h3>Pizza</h3>
      <p>Pepperoni, Tomato Sauce, Mozzarella</p>
    </div>
  );
}

export default App;
