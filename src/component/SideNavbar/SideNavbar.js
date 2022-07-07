import React from "react";
import ItemList from "../ItemList/ItemList";
import "./SideNavbar.css";
import * as AiIcons from "react-icons/ai";

const SideNavbar = (props) => {
  return (
    <nav className={props.sidebar ? "nav-items active" : "nav-items"}>
      <span className="nav-close" onClick={props.clicked}>
        <AiIcons.AiOutlineClose />
      </span>
      <ItemList clicked={props.clicked} />
    </nav>
  );
};

export default SideNavbar;
