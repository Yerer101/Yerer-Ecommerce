import React from "react";
import "./Backdrop.css";

const Backdrop = ({ sidebar, closeSidebar }) => {
  return (
    <div
      className={
        sidebar ? "backdrop-container backdrop-active" : "backdrop-container"
      }
      onClick={closeSidebar}
    ></div>
  );
};

export default Backdrop;
