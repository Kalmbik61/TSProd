import React from "react";
import { LinkProps } from "./Link.props";
import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Link.module.scss";

export default function Link({ children, type, to, className, ...props }: LinkProps): JSX.Element {
  switch (type) {
    case "router":
      return (
        <>
          {to && (
            <RouterLink to={to} className={cn(className, styles.router, styles.common)} {...props}>
              {children}
            </RouterLink>
          )}
        </>
      );
    case "link":
      return (
        <div className={cn(className, styles.link, styles.common)} {...props}>
          {children}
        </div>
      );
    default:
      throw Error("Error in type prop!");
  }
}
