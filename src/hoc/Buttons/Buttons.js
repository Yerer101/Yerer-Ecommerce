import React from "react";
import "./Buttons.css";

const Button = (props) => {
  let template = null;
  switch (props.type) {
    case "linkTo":
      template = (
        <div onClick={props.clicked} className="btn">
          {props.txt}
        </div>
      );
      break;
    default:
      break;
  }
  return template;
};

export default Button;
