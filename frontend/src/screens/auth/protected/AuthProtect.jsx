import React from "react";
import { Navigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../../helpers/Index";
import { ROUTES } from "../../../routes";

const ProtectedRoute = ({ children }) => {
  const token = getTokenFromLocalStorage;
  return token ? <Navigate to={ROUTES.TASK_DASHBOARD} /> : children;
};

export default ProtectedRoute;
