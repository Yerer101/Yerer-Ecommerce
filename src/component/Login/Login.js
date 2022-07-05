import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Navbar from "../../hoc/Navbar/Navbar";
import user from "../database";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoggedIn, setLoggedIn] = useState(false);

  // User Login info

  const onSubmit = (data) => {
    const userData = user.find((user) => user.username === data.username);
    console.log(data);

    // Compare user info
    if (userData) {
      if (userData.password !== data.password) {
        // Invalid password
        alert("Wrong Password");
      } else {
        alert(`Succefuly Loged-In, Welcome ${data.username}`);
        setLoggedIn(true);
        reset();
      }
    } else {
      // Username not found
      alert("User Name not Found");
    }
  };

  return isLoggedIn ? (
    <Navigate to="sale" />
  ) : (
    <Navbar>
      <form onSubmit={handleSubmit(onSubmit)} className="input-container ">
        <div className="form">
          <div className="input-userName">
            <input
              type="text"
              name="username"
              className="w3-light-grey"
              placeholder="User Name"
              {...register("username")}
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              name="password"
              className="w3-light-grey "
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <div className="login">
            <input
              type="submit"
              value="Log-In"
              className="w3-btn w3-round w3-hover-black login"
            />
          </div>
        </div>
      </form>
    </Navbar>
  );
}
