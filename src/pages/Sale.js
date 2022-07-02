import React from "react";
import { Redirect } from "react-router-dom";

export const Sale = ({ autoried }) => {
  if (!autoried) {
    return <Redirect to="/" />;
  }
  return <div>Sale</div>;
};
