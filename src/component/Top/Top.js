import React from "react";
import "./Top.css";
import yerer from "./yerer.png";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top-index">
      <div className="w3-row w3-mycolor w3-padding">
        <div className="w3-half">
          <Link to="/">
            <a href="#.html">
              <img className="logo-img" src={yerer} alt="#" />
            </a>
          </Link>
        </div>
        <div className="w3-half w3-wide w3-hide-medium w3-hide-small">
          <div className="w3-right w3-text-white">
            " '' Let See What We Could Do For You "
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
