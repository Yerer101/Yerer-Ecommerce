import React from "react";
import "./Register.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .min(10, "Phone Number must be 10 digits"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div className="register-container">
      <div>
        <h1 className="form-header">Create An Account</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>New User Name</label>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            {...register("username")}
            className={`form-input w3-light-grey ${
              errors.username ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback float-right">
            {errors.username?.message}
          </div>
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className={`form-input w3-light-grey ${
              errors.phoneNumber ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
        </div>

        <div>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            {...register("password")}
            className={`form-input w3-light-grey ${
              errors.password ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password"
            {...register("confirmPassword")}
            className={`form-input w3-light-grey ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <button
          type="submit"
          value="Sign-Up"
          className="w3-btn w3-round w3-hover-black signup-btn"
        >
          Register
        </button>

        {/* <input
          type="submit"
          value="Sign-Up"
          className="w3-btn w3-round w3-hover-black signup-btn"
        /> */}
      </form>
    </div>
  );
};

export default Register;
