import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = (props) => {
  const { className, label, onClick, ...rest } = props;

  return (
    <button
      className={`text-white rounded bg-danger ${className}`}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
