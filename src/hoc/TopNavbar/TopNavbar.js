import React from "react";
import "./TopNavbar.css";

const TopNavbar = (props) => {
  return <div className="navbar-container">{props.children}</div>;
};

export default TopNavbar;
