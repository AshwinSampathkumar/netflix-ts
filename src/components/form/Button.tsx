import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  label,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`rounded bg-danger ${className}`}
      onClick={onClick}
      type={type && type}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
