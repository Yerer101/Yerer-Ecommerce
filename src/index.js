import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { HashRouter as Router } from "react-router-dom"
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" element={<App />}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
