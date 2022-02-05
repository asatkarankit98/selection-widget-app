import react from "react";
import { Link } from "react-router-dom";
import "./Buttontestcss.css";

function Buttontest(props) {
  return (
    <>
      <div className="row " id="navebtn">
        <div className="col-4">
          <Link to="/page1">
            <button
              style={{
                backgroundColor: props.data == "This is page 1" ? "Red" : "",
              }}
            >
              Red{" "}
            </button>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/page2">
            <button
              style={{
                backgroundColor: props.data == "This is page 2" ? "blue" : "",
              }}
            >
              blue{" "}
            </button>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/page3">
            <button
              style={{
                backgroundColor: props.data == "This is page 3" ? "Green" : "",
              }}
            >
              Green
            </button>
          </Link>
        </div>
      </div>
      <div>{props.data}</div>
      <div>
        <Link to="/material">
          <button>Click hear tu go to materialui page</button>
        </Link>
      </div>
    </>
  );
}
export default Buttontest;
