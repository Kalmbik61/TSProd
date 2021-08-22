import React from "react";
import { TextFieldProps } from "./TextField.props";
import cn from "classnames";
import styles from "./TextField.module.scss";

export default function TextField({
  placeholder,
  type,
  field,
  className,
  validation = false,
  validRegister,
  autoComplete,
  color,
  ...props
}: TextFieldProps): JSX.Element {
  if (field === "input") {
    return (
      <div
        className={cn(styles.input, styles.textField, className, {
          [styles.primary]: color === "primary",
        })}
      >
        {validation ? (
          <input
            placeholder={placeholder}
            type={type}
            {...validRegister}
            autoComplete={autoComplete}
            {...props}
          />
        ) : (
          <input placeholder={placeholder} type={type} autoComplete={autoComplete} {...props} />
        )}
      </div>
    );
  }
  return (
    <div
      className={cn(styles.textarea, styles.textField, className, {
        [styles.primary]: color === "primary",
      })}
    >
      {validation ? (
        <textarea placeholder={placeholder} {...validRegister} {...props} />
      ) : (
        <textarea placeholder={placeholder} {...props} />
      )}
    </div>
  );
}
