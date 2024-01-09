import "./App.css";
import pizzas from "./pizzas.json";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div className="Menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
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
      <h2>Pizza</h2>
      <img src="pizzas/bbq_chicken_pizza.jpg" alt="Pizza BBQ" />
    </div>
  );
}

export default App;
