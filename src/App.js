import logo from "./logo.svg";
import "./App.css";
import Buttontest from "./Buttontest";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Button2 from "./Button2";
import Button1 from "./Button1";
import Button3 from "./Button3";
import Materialuipage from "./Materialuipage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Buttontest />
        </Route>
        <Route exact path="/page1">
          <Button1 />
        </Route>
        <Route exact path="/page2">
          <Button2 />
        </Route>
        <Route exact path="/page3">
          <Button3 />
        </Route>
        <Route exact path="/material">
          <Materialuipage />
        </Route>
      </Switch>
      {/* <Buttontest /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
