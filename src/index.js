import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataState from "./context/data/DataState";

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById("root")
);
