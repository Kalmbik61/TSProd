import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface LineProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: "white" | "grey";
  height?: number;
}
