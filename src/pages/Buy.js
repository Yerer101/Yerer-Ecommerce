import React, { useState } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import TopNavbar from "../hoc/TopNavbar/TopNavbar";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import * as FaIcons from "react-icons/fa";
import Button from "../hoc/Buttons/Buttons";
import Backdrop from "../hoc/Backdrop/Backdrop";

export const Buy = () => {
  const [navigateToSell, setNavigateToSell] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const navigateToHome = () => setNavigateToSell((prevState) => !prevState);

  const showSidebar = () => setSidebar((prevState) => !prevState);

  return navigateToSell ? (
    <Navigate to="/Home" />
  ) : (
    <div>
      <Backdrop sidebar={sidebar} closeSidebar={showSidebar} />
      <TopNavbar>
        <div className="topnav-buy-container">
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
