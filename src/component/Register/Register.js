import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import RegisterTemplate from "./RegisterTemplate";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const verifiably = () => {};

  return (
    <div className="register-container">
      <div>
        <h1 className="form-header">Create An Account</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegisterTemplate
          label=" New User Name"
          type="text"
          name="username"
          placeholder="User Name"
          register={register}
        />
        <RegisterTemplate
          label="Your Mobile Number"
          type="text"
          name="phone number"
          placeholder="Phone Number"
          register={register}
        />
        <RegisterTemplate
          label="New password"
          type="password"
          name="psw"
          placeholder="Password"
          register={register}
        />
        <input
          type="submit"
          value="Sign Up"
          onClick={verifiably}
          className="w3-button w3-round w3-hover-black w3-mycolor signup-btn"
        />
      </form>
    </div>
  );
};

export default Register;
