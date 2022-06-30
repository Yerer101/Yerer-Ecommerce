import React from "react";
import "../css/w3.css";
import "./page.css";
import Topnav from "../component/Topnav/Topnav";
import Register from "../component/Register/Register";
import images from "../assets/ecommerce3.jpg";

export const Home = () => {
  return (
    <div>
      <div>
        <Topnav />
      </div>
      <div className="home-container">
        <Register />
        <div className="images-container">
          <img src={images} alt="Logo" className="image-size" />
        </div>
      </div>
    </div>
  );
};
