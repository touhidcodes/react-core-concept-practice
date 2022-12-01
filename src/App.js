import logo from "./logo.svg";
import "./App.css";

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
        <Products product={productDetails[0]}></Products>
        <Persons
          name="Sakib Al Hassan"
          salary="350000"
          profession="Cricketer"
        ></Persons>
        <Persons
          name="Enayet Chowdhury"
          salary="30000"
          profession="Teacher"
        ></Persons>
        <Persons
          name="Jhankar Mahbub"
          salary="500000"
          profession="Programmer"
        ></Persons>
      </header>
    </div>
  );
}

function Persons(props) {
  const style = {
    border: "2px solid yellow",
    margin: "10px",
    width: "500px",
  };
  return (
    <div style={style}>
      <p>Name: {props.name}</p>
      <p>Salary: {props.salary}</p>
      <p>Profession: {props.profession}</p>
    </div>
  );
}

function Products(props) {
  return (
    <div>
      <h2>{props.productDetails.name}</h2>
      <h3>{props.productDetails.price}</h3>
      <button>Buy now</button>
    </div>
  );
}
export default App;
