import { ReactElement, ReactFragment, ReactPortal } from "react";

export interface ButtonProps {
  className?: string;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface InputProps {
  className?: string;
  placeholder: string;
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

export interface AccordionProps {
  title: string;
  show: boolean;
  onChange: () => void;
  children:
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
}

export interface GradientImageProps {
  height?: string;
}
