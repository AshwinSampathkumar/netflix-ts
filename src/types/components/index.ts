import { ReactElement, ReactFragment, ReactPortal } from "react";

export interface HeaderProps {
  containerClassName?: string;
}
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

export interface TilePressDataType {
  title: string;
  imageSource: string;
}
export interface ProfileTileProps extends TilePressDataType {
  onPressTile: (e: TilePressDataType) => void;
}

export interface VideoTitleType {
  title: string;
  overview: string;
}

export interface VideoBackgroundType {
  movieId: number | string;
}

export interface MoviesListProps {
  title: string;
  movies: any;
}

export interface MovieCardProps {
  posterPath: string;
}
