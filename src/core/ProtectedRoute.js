import React from "react";
import { Navigate } from "react-router-dom";
import { userIsLoggedIn } from "./utils/authService";

const ProtectedRoute = ({ children }) => {
  if (!userIsLoggedIn()) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return <>{ children }</>;
};

export default ProtectedRoute;
