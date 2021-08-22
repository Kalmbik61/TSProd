import React from "react";
import BurgerProps from "./Burger.props";
import styles from "./Burger.module.scss";
import cn from "classnames";

export default function Burger({ isOpen, onClickHandler }: BurgerProps) {
  return (
    <div
      className={cn(styles.header_burger, {
        [styles.active]: isOpen,
      })}
      onClick={(e) => onClickHandler(!isOpen)}
    >
      <span className={styles.burger_line}></span>
    </div>
  );
}
