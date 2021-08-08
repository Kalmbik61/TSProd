import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  type: "router" | "link";
  to?: string | object;
  className?: string;
  onClick?: () => void;
}
