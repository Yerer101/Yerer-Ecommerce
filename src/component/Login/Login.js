import React, { useState } from "react";
import "./Login.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Navbar from "../../hoc/Navbar/Navbar";
import user from "../database";
// import ProtectedRoutes from "../../ProtectedRoutes";

const Login = (props) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

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
    <Navigate to="/sale" />
  ) : (
    <Navbar>
      <form onSubmit={handleSubmit(onSubmit)} className="input-container ">
        <div className="form">
          <div className="input-userName">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              {...register("username")}
              className="w3-light-grey"
              required
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
              className="w3-light-grey"
              required
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
};

export default Login;
