import React from "react";
import "./Topnav.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import TopNavbar from "../../hoc/TopNavbar/TopNavbar";

const Topnav = (props) => {
  const forgotPassword = () => (
    <div className="forgot-password">
      <Link to="/">Forgot my password</Link>
    </div>
  );

  return (
    <TopNavbar>
      <Login value {...props} />
      <div className="forgotpassword-container">{forgotPassword()}</div>
    </TopNavbar>
  );
};

export default Topnav;
