import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const productDetails = [
    { name: "Photoshop", price: "89.99$" },
    { name: "Illustrator", price: "60.99$" },
    { name: "Acrobat", price: "12.67$" },
  ];
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
        <p>This is my first React App</p>
        <Count></Count>
        <ul>
          {productDetails.map((product) => (
            <Products product={product}></Products>
          ))}
        </ul>
      </header>
    </div>
  );
}

function Products(props) {
  const productStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    border: "2px solid grey",
    borderRadius: "5px",
    margin: "10px",
    float: "left",
    height: "280px",
    width: "350px",
  };
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h3>Price: {props.product.price}</h3>
      <p>Lorem, ipsum dolor sit amet.</p>
      <button>Buy now</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const btnHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Count:</h3>
      <button onClick={btnHandler}>Increase</button>
    </div>
  );
}
export default App;
