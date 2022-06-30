import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Topnav.css";
import Login from "../Login/Login";

class Topnav extends Component {
  forgotPassword = () => (
    <div className="forgot-password">
      <Link to="/">Forgot my password</Link>
    </div>
  );

  render() {
    return (
      <div>
        <Login />
        <div className="forgotpassword-container">{this.forgotPassword()}</div>
      </div>
    );
  }
}

export default Topnav;
