import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
    console.log(data);

    // Compare user info
    if (userData) {
      if (userData.password !== data.password) {
        // Invalid password
        alert("Wrong Password");
      } else {
        alert(`Succefuly Loged-In, Welcome ${data.username}`);
        reset();
      }
    } else {
      // Username not found
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
            <input
              type="submit"
              value="Log-In"
              className="w3-btn w3-round w3-hover-black login"
            />
          </div>
        </div>
      </form>
      {/* <LoginTemplate
              type="text"
              name="userName"
              placeholder="User Name"
              register={register}
            /> 
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
