import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface LottieProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  animation: any[];
}
