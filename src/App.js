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
  return (
    <footer className="footer">{new Date().to}We're currently open!</footer>
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
