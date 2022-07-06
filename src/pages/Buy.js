import React, { useState } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import Navbar from "../hoc/Navbar/Navbar";
import ItemList from "../component/ItemList/ItemList";
import sidebar from "../assets/sidebar.png";

export const Buy = () => {
  const [sell, setSell] = useState(false);
  const [barClicked, setBarClicked] = useState(false);

  const navigateToHome = () => {
    setSell(true);
  };

  const clickHandler = () => {
    console.log("e", barClicked);
    if (barClicked) {
      setBarClicked(false);
    } else {
      setBarClicked(true);
    }
  };

  return sell ? (
    <Navigate to="/home" />
  ) : (
    <div>
      <Navbar>
        <div className="nav-container">
          <span onClick={() => clickHandler()}>
            <img src={sidebar} className="images" />
          </span>
          <button className=" btn-sell" onClick={() => navigateToHome()}>
            SELL
          </button>
        </div>
      </Navbar>
      <div className={`itemlist-container ${barClicked}?"show":""`}>
        <ItemList />
      </div>
    </div>
  );
};
