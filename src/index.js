import React from "react";
import ReactDOM from "react-dom";//DOM- Document Object Model
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"


ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  ,document.getElementById("root"));
//render means to show
//ReactDOM.render(what to show,where to show,return type)
//JSX: JavaScript Extandable or JavaScript and XML

