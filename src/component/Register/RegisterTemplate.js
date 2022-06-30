import React from "react";

function RegisterTemplate({ label, type, name, placeholder, style, register }) {
  return (
    <div>
      <label htmlFor="user name">{label}</label>
      <input
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-input"
        ref={register}
        required
      />
    </div>
  );
}

export default RegisterTemplate;
