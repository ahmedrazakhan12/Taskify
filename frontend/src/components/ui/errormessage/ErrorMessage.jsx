import React from "react";

const ErrorMessage = ({ className, text }) => {
  return (
    <div className=" ">
      {" "}
      <p
        className={`font-Monsterrat font-bold text-[12px] text-danger-1 ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export default ErrorMessage;
