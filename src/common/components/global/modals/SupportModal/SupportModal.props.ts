import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface SupportModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}
