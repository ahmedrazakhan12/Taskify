import React from "react";
import { Link } from "react-router-dom";

const NavigateBar = ({ text, route, linkText }) => {
  return (
    <div className="text-center mt-5">
      <div className="text-[12px] text-muted-foreground text-gray-300 font-bold font-Monsterrat inline-flex items-center gap-2">
        {text}
        <Link to={route} className="hover:underline text-gray-300">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default NavigateBar;
