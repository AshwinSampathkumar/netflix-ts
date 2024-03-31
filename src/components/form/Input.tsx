import React from "react";
import { InputProps } from "../../types";

const Input: React.FC<InputProps> = (props) => {
  const { className, placeholder, ...rest } = props;
  return (
    <input
      className={`border border-gray-500 bg-[rgb(0,0,0,0.8)] h-14 text-white text-md font-semibold px-3 rounded focus:outline focus:outline-gray-300 ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
