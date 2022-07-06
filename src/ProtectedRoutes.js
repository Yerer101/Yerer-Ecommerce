import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  // const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
