import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

export default function Login() {
  const { register, handleSubmit, errors, reset } = useForm();

  // User Login info
  const database = [
    {
      username: "abraham",
      password: "123",
    },
  ];

  const onSubmit = (data) => {
    const userData = database.find((user) => user.username === data.username);

    if (userData) {
      if (userData.password !== data.password) {
        alert("Wrong Password");
      } else {
        alert(`Succefuly Loged-In, Welcome ${data.username}`);
      }
    } else {
      alert("User Name not Found");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="input-container ">
        <div className="form">
          <div className="input-userName">
            <input
              type="text"
              name="username"
              className="w3-light-grey"
              placeholder="User Name"
              ref={register}
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              name="password"
              className="w3-light-grey "
              placeholder="Password"
              ref={register}
            />
          </div>
          <div className="login">
            {/* <input
              type="submit"
              value="Log-In"
              className="w3-btn w3-round w3-hover-black login"
            /> */}
            <button
              type="submit"
              value="Log-In"
              className="w3-btn w3-round w3-hover-black login"
            ></button>
          </div>
        </div>
      </form>

      {/* <div>{!logIn ? "Error with your account" : navigate("/Sale")}</div> */}
      {/* <LoginTemplate
              type="text"
              name="userName"
              placeholder="User Name"
              register={register}
            /> 
            <Link to="/" >

            </Link>
      */}
      {/* <LoginTemplate
              type="password"
              name="password"
              placeholder="Password"
              register={register}
            /> */}
      {/* <div className="input-userName">
            <input
              type="text/number"
              name="userName"
              placeholder="User Name"
              className="w3-light-grey w3-round"
              autoComplete="off"
              ref={register}
              required
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w3-light-grey "
              autoComplete="off"
              ref={register({ minLength: 8 })}
              required
            />
          </div> */}
    </div>
  );
}
