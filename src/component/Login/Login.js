import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LoginTemplate from "./LoginTemplate";

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
];

const errors = {
  uname: "invalid username",
  pass: "invalid password",
};

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // data.preventDefault();
    alert(JSON.stringify(data));
    reset();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="input-container ">
        <div className="form">
          <div className="input-userName">
            <LoginTemplate
              type="text"
              name="userName"
              placeholder="User Name"
              register={register}
            />
            {renderErrorMessage("userName")}
          </div>
          <div className="input-password">
            <LoginTemplate
              type="password"
              name="password"
              placeholder="Password"
              register={register}
            />
            {renderErrorMessage("password")}
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
    </div>
  );
}
