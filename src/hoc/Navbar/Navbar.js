import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return <div className="navbar-container">{props.children}</div>;
};

export default Navbar;
