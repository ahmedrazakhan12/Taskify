import React, { useState } from "react";

const Modal = ({ isOpen, onClose, content, className, backdrop }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay fixed inset-0  ${
        backdrop ? backdrop : "bg-gray-800 bg-opacity-80"
      } z-[9999] flex items-center justify-center transition-opacity duration-300  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-gradient-to-r from-blue-900 to-purple-700 p-6 rounded-2xl shadow-lg max-h-[90vh] mx-5 ${className}  w-full transition-transform transform duration-500 ease-in-out ${
          isOpen ? "scale-[0.8]" : "scale-50"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;
