import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Use named import
import { getTokenFromLocalStorage, logout } from "../../../helpers/Index";
import { ROUTES } from "../../../routes";

const PrivateRoute = ({ children }) => {
  const token = getTokenFromLocalStorage;

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return logout();
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
};

export default PrivateRoute;
