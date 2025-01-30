import { publicRoutes, privateRoutes } from "../../data";
import Sidebar from "../ui/sidebar/Index";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthProtect from "../../screens/auth/protected/AuthProtect";
import PrivateProtectedRoute from "../../screens/auth/protected/PrivateProtectedRoute";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "../modal/Modal";
const AppContent = () => {
  const location = useLocation();
  const [isModal, setModal] = useState({
    open: false,
    component: null,
  });

  const closeModal = () =>
    setModal({
      open: false,
      component: null,
    });
  const [requestSent, setRequestSent] = useState(false);

  const isPrivateRoute = privateRoutes.some(
    (route) => route.path === location.pathname
  );
  return (
    <div className="transition-all duration-500 flex">
      {isPrivateRoute && (
        <Sidebar
          setRequestSent={setRequestSent}
          isModal={isModal}
          setModal={setModal}
          requestSent={requestSent}
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
                  {React.cloneElement(element, {
                    isModal,
                    setModal,
                    setRequestSent,
                    requestSent,
                  })}
                </PrivateProtectedRoute>
              }
            />
          ))}
        </Routes>
      </div>

      <Modal
        isOpen={isModal.open}
        onClose={isModal.open}
        className={` max-w-xl `}
        content={
          isModal.component
            ? React.cloneElement(isModal.component, { closeModal })
            : null
        }
      />
    </div>
  );
};

export default AppContent;
