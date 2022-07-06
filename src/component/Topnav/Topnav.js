import React from "react";
import "./Topnav.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Topnav = (props) => {
  const forgotPassword = () => (
    <div className="forgot-password">
      <Link to="/">Forgot my password</Link>
    </div>
  );

  return (
    <div>
      <Login value {...props} />
      <div className="forgotpassword-container">{forgotPassword()}</div>
    </div>
  );
};

export default Topnav;
