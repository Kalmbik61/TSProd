import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface AccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  icon?: SVGAElement | JSX.Element;
  title: string;
}
