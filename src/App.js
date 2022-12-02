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
        <ul>
          {productDetails.map((product) => (
            <Products product={product}></Products>
          ))}
        </ul>
        <p>This is my first React App</p>
        <Products product={productDetails[0]}></Products>
        <Products product={productDetails[1]}></Products>
        <Products product={productDetails[2]}></Products>
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
export default App;
