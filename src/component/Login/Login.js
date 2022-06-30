import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import LoginTemplate from "./LoginTemplate";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data))
    // e.target.reset()
    reset();
  };

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
          </div>
          <div className="input-password">
            <LoginTemplate
              type="password"
              name="password"
              placeholder="Password"
              register={register}
            />
          </div>
          <div className="login">
            <input
              type="submit"
              value="Log-In"
              className="w3-btn w3-round w3-mycolor w3-hover-black login"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
