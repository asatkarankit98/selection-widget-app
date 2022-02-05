import logo from "./logo.svg";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Materialuipage from "./Materialuipage";
import Button from "./Selectionwidget";
import { Link } from "react-router-dom";
import Seclectionwidget from "./Selectionwidget";
function App() {
  const ButtonList = [
    {
      config: 1,
      description: "red",
    },
    {
      config: 2,
      description: "Green",
    },
    {
      config: 3,
      description: "Blue",
    },
  ];
  return (
    <>
      <Switch>
        <Route exact path="/materil">
          <Materialuipage />
        </Route>
      </Switch>
      <div className="App" style={{ display: "inline-flex", width: "100%" }}>
        {ButtonList.map((e) => {
          return (
            <Seclectionwidget config={e.config} description={e.description} />
          );
        })}
      </div>
      <Link to="/materil">
        <button>click to ui page</button>
      </Link>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/aa">
//           <Buttontest />
//         </Route>
//         <Route exact path="/page1">
//           <Button1 />
//         </Route>
//         <Route exact path="/">
//           <Button2 />
//         </Route>
//         <Route exact path="/page3">
//           <Button3 />
//         </Route>
//         <Route exact path="/material">
//           <Materialuipage />
//         </Route>
//       </Switch>
{
  /* <Buttontest /> */
}
{
  /* <header className="App-header">
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
      </header> */
}
//     </div>
//   );
// }

export default App;
