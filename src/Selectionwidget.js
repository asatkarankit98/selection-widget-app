import "./Buttontestcss.css";
import { Link } from "react-router-dom";

function Seclectionwidget(props) {
  return (
    <>
      <div className="row " id="navebtn" style={{ width: "100%" }}>
        <div className="col-4">
          <Link to="/page1">
            <button>{props.description}</button>
          </Link>
        </div>
      </div>
    </>
    // <div style={{ border: "1px solid black", margin: "10px", width: "20%" }}>
    //   {/* <p> {props.config} </p> */}

    //   <p> {props.description}</p>
    // </div>
  );
}
export default Seclectionwidget;
