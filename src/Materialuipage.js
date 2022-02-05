import React from "react";
import Buttontest from "./Buttontest";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import "./Buttontestcss.css";
export default function Materialuipage() {
  return (
    <>
      <div className="header">
        <AppBar position="static">
          <CssBaseline />
          <Toolbar style={{ alignItems: "center", textAlign: "center" }}>
            <Typography variant="h4" className="" id="nave">
              Navbar
            </Typography>
          </Toolbar>
        </AppBar>
        <div
          className="main_box row"
          id="main_box"
          style={{ display: "inline-flex", width: "100%" }}
        >
          <div
            className="col-4"
            id="image"
            style={{
              width: "40%",
              height: "500px",
              padding: "10px",
            }}
          >
            <img
              src="download.png"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-7" style={{ width: "60%" }}>
            <h1>This is online Shoping </h1>
            <p>
              details the conditions by which a person may hold New Zealand
              nationality. Regulations apply to the Realm of New Zealand, which
              consists of the country of New Zealand itself, the Cook Islands,
              Niue, Tokelau, and the Ross Dependency. All persons born in the
              Realm before 2006 were automatically citizens at birth regardless
              of the nationalities of their parents. Since that year,
              individuals born in the Realm only receive citizenship at birth if
              at least one parent is already a citizen or entitled to live in
              New Zealand indefinitely (meaning permanent residents of New
              Zealand or of Australia, and citizens of Australia). Foreigners
              living in the Realm may be granted citizenship after becoming
              permanent residents. New Zealand is a former British colony and
              its residents were previously British subjects. While New
              Zealanders are no longer British, they continue to hold favoured
              status when living in the United Kingdom; they are eligible to
              vote in British elections and serve in public office there.
            </p>
            <button>Click</button>
          </div>
        </div>
      </div>
    </>
  );
}
