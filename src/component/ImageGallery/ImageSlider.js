import React from "react";
import "./ImageSlider.css";
import images from "../../assets/ecommerce4.jpg";

const ImageSlider = () => {
  return (
    <div className="images-container">
      <img src={images} alt="Logo" className="image-size" />
    </div>
  );
};

export default ImageSlider;
