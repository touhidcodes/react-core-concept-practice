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
        <Component></Component>
        <Component></Component>
        <Component></Component>
      </header>
    </div>
  );
}

function Component() {
  const componentStyle = {
    border: "2px solid yellow",
    margin: "5px",
  };
  const color = {
    color: "red",
  };
  return (
    <div style={componentStyle}>
      <h3>Component</h3>
      <p style={color}>Learn React App Component</p>
    </div>
  );
}
export default App;
