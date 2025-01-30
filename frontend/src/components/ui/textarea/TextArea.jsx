import React from "react";
import ErrorMessage from "../errormessage/ErrorMessage";

const TextArea = ({
  type = "text",
  prefixIcon,
  suffixIcon,
  placeholder,
  className,
  name,
  onChange,
  inputValue,
  error,
}) => {
  return (
    <>
      <div
        className={`relative bg-white rounded-2xl shadow-lg font-Montserrat px-4 py-2 my-3 `}
      >
        {placeholder && (
          <p className="font-Montserrat font-bold text-sm text-gray-900 opacity-70">
            {placeholder}
          </p>
        )}

        {prefixIcon && (
          <span className="absolute left-4 top-[40px] transform -translate-y-2/2 z-10">
            {prefixIcon}
          </span>
        )}

        <textarea
          type={type}
          value={inputValue}
          name={name}
          placeholder={placeholder}
          maxLength={500}
          onChange={onChange}
          className={`w-[90%] ml-8 pr-10 rounded-md font-[600] placeholder:text-[12px] focus:outline-none font-Montserrat text-[11px] ${className}`}
        />

        {suffixIcon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            {suffixIcon}
          </span>
        )}
      </div>
      <ErrorMessage ErrorMessage={error} />
    </>
  );
};

export default TextArea;
