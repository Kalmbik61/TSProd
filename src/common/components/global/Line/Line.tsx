import React from "react";
import LineProps from "./Line.props";
import cn from "classnames";
import styles from "./Line.module.scss";
export default function Line({ color, height = 1, className }: LineProps): JSX.Element {
  return (
    <div
      className={cn(styles.line, className, {
        [styles.white]: color === "white",
        [styles.grey]: color === "grey",
      })}
      style={{ height: height }}
    ></div>
  );
}
