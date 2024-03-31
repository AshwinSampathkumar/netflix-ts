import { ReactElement, ReactFragment, ReactPortal } from "react";

export interface ButtonProps {
  className?: string;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  placeholder: string;
  name?: string;
  value: string;
  error?: string | null | undefined | false;
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
