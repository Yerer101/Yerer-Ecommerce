import React from "react";
import ItemList from "../ItemList/ItemList";
import "./SideNavbar.css";
import * as AiIcons from "react-icons/ai";

const SideNavbar = ({ sidebar, clicked }) => {
  return (
    <nav className={sidebar ? "nav-items active" : "nav-items"}>
      <span className="nav-close" onClick={clicked}>
        <AiIcons.AiOutlineClose />
      </span>
      <ItemList clicked={clicked} />
    </nav>
  );
};

export default SideNavbar;
