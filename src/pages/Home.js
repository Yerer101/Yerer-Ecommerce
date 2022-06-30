import React from "react";
import "../css/w3.css";
import Topnav from "../component/Topnav/Topnav";
import Register from "../component/Register/Register";
import images from "../assets/ecommerce.jpg";

export const Home = () => {
  return (
    <div>
      <div>
        <Topnav />
      </div>
      <div className="home-container">
        <div>
          <Register />
        </div>
        <div>
          <img src={images} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
