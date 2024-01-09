import logo from "./logo.svg";
import "./App.css";
import pizzas from "./pizzas.json";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </header>
    </div>
  );
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
