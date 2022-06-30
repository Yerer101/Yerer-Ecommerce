import React from "react";

const LoginTemplate = ({ type, name, placeholder, register }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w3-light-grey "
        autoComplete="off"
        required
        ref={register}
      />
    </div>
  );
};

export default LoginTemplate;
