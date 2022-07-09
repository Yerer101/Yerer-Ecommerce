import React, { useState } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import TopNavbar from "../hoc/TopNavbar/TopNavbar";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import * as FaIcons from "react-icons/fa";
import Button from "../hoc/Buttons/Buttons";

export const Buy = () => {
  const [navigateToSell, setNavigateToSell] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const navigateToHome = () => {
    setNavigateToSell(true);
  };

  const showSidebar = () => setSidebar(!sidebar);

  return navigateToSell ? (
    <Navigate to="/Home" />
  ) : (
    <div>
      {/* <div className={sidebar ? "overlay" : ""}></div> */}
      <TopNavbar>
        <div className="topnav-container">
          <FaIcons.FaBars
            onClick={() => showSidebar()}
            className="navbar-icon"
          />
          <Button type="linkTo" txt="Sell" clicked={navigateToHome} />
        </div>
      </TopNavbar>
      <SideNavbar sidebar={sidebar} clicked={showSidebar} />
    </div>
  );
};
