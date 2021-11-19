import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "babel-polyfill";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
