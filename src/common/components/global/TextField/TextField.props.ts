export interface TextFieldProps {
  onClick?: any;
  onChange?: any;
  type?: InpitTypes;
  field: FieldsTypes;
  placeholder?: string;
  className?: string;
  validation?: boolean;
  validRegister?: object;
  autoComplete?: "off";
  color?: "primary";
}

export enum FieldsTypes {
  input = "input",
  textarea = "textarea",
}
export enum InpitTypes {
  email = "email",
  number = "number",
  text = "text",
}
