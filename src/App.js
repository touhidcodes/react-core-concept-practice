import logo from "./logo.svg";
import "./App.css";

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
        <p>This is my first React App</p>
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
export default App;
