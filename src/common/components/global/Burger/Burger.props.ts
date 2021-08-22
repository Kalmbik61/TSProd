import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface BurgerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  onClickHandler: (bool: boolean) => void;
}
