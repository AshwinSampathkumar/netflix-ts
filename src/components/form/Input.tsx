import React from "react";
import { InputProps } from "../../types";

const Input: React.FC<InputProps> = ({
  className = "",
  placeholder,
  error,
  ...rest
}) => {
  return (
    <>
      <input
        className={`border border-gray-500 bg-[rgb(0,0,0,0.8)] h-14 text-md font-semibold px-3 rounded focus:outline focus:outline-gray-300 w-full ${className}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="mt-1 text-danger">{error}</p>}
    </>
  );
};

export default Input;
