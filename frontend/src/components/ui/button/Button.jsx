import React, { useState } from "react";
import Loader from "../loader/Loader";

const Button = ({
  prefixIcon,
  suffixIcon,
  label,
  className,
  disabled,
  onClick,
  type,
  id,
  isActive,
  loading,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true); 
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  return (
    <button
      id={id}
      onClick={handleClick} 
      disabled={disabled}
      type={type}
      className={`relative bg-purple-1 flex  items-center w-full p-3 overflow-hidden
        ${isActive == false && "bg-purple-1 opacity-20"} 
        ${isActive == true && "bg-purple-1"} 
        ${disabled && "opacity-50 pointer-events-none"} 
        ${className} transition duration-500 ease-in-out`}
    >
      <span
        className={`absolute inset-0 bg-black-1 opacity-15 transition-all duration-300 transform ${
          clicked ? "scale-100" : "scale-0"
        } origin-center`}
      />
      {prefixIcon && <span className="pb-1">{prefixIcon}</span>}
      {label && (
        <div
          className={`ml-2 flex items-center  font-Monsterrat text-center text-white`}
          style={{ letterSpacing: "1px" }}
        >
          {loading ? (
            <>
              <Loader /> <span className="mx-2">Loading...</span>{" "}
            </>
          ) : (
            label
          )}
        </div>
      )}
      {suffixIcon && <span className="pb-1">{suffixIcon}</span>}
    </button>
  );
};

export default Button;
