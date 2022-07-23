import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./SideNavbar.css";
import * as AiIcons from "react-icons/ai";

const SideNavbar = ({ sidebar, clicked }) => {
  // const [dropdown, setDropdown] = useState(false);

  // const dropdownList = () => {
  //   setDropdown((prevState) => !prevState);
  // };

  return (
    <nav className={sidebar ? "nav-items active" : "nav-items"}>
      <span className="nav-close" onClick={clicked}>
        <AiIcons.AiOutlineClose />
      </span>
      <ItemList />
    </nav>
  );
};

export default SideNavbar;
