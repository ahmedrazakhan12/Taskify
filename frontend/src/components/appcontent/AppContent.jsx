import { publicRoutes, privateRoutes } from "../../data";
import Sidebar from "../ui/sidebar/Index";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthProtect from "../../screens/auth/protected/AuthProtect";
import PrivateProtectedRoute from "../../screens/auth/protected/PrivateProtectedRoute";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
const AppContent = () => {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const isPrivateRoute = privateRoutes.some(
    (route) => route.path === location.pathname
  );
  return (
    <div className="transition-all duration-500 flex">
      {isPrivateRoute && (
        <Sidebar
          setRequestSent={setRequestSent}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      <Toaster />
      <div className={isPrivateRoute ? "ml-16 flex-grow" : "w-full"}>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<AuthProtect>{element}</AuthProtect>}
            />
          ))}

          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <PrivateProtectedRoute>
                  {React.cloneElement(element, { isModalOpen, requestSent })}
                </PrivateProtectedRoute>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AppContent;
