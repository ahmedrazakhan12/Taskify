import React from "react";
import { Navigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../../helpers/Index";
import { ROUTES } from "../../../routes";

const PrivateRoute = ({ children }) => {
  const token = getTokenFromLocalStorage;
  if (!token) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
};

export default PrivateRoute;
