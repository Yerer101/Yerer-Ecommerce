import React from "react";
import "../css/w3.css";
import Topnav from "../component/Topnav/Topnav";
import Register from "../component/Register/Register";
import ImageSlider from "../component/ImageGallery/ImageSlider";

export const Home = () => {
  return (
    <div>
      <div>
        <Topnav />
      </div>
      <div className="home-container">
        <Register />
        <ImageSlider />
      </div>
    </div>
  );
};
