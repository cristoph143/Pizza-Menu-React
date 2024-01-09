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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working with our menu! Please come back later.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen) {
    return (
      <div>
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      </div>
    );
  }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <div>
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        </div>
      )}
    </footer>
  );
}

function Order(props) {
  const { closeHour } = props;
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza(props) {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;
  // if (soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>
          {soldOut ? "SOLD OUT" : (parseFloat(price.toFixed(2)) + 3).toFixed(2)}
        </span>
      </div>
    </li>
  );
}

export default App;
