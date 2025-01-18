import { ReactNode } from "react";

export type ButtonProps = {
  children: string | ReactNode;
  onClick?: () => void;
  className?: string;
  theme?: "primary" | "secondary";
  link?: string;
};
