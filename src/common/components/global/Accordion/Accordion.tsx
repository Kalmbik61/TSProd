import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../../images/icons/icon-arrow.svg";
import AccordionProps from "./Accordion.props";
import cn from "classnames";
import styles from "./Accordion.module.scss";

export default function Accordion({
  className,
  title,
  icon,
  children,
  ...props
}: AccordionProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={cn(styles.accordion, className, {
        [styles.active]: active,
      })}
      onClick={() => setActive(!active)}
      {...props}
    >
      <div className={styles.header}>
        <span
          className={cn(styles.icon, {
            [styles.active]: active,
          })}
        >
          {icon ? { icon } : <Arrow />}
        </span>
        <h6 className={cn(styles.text, styles.title)}>{title}</h6>
      </div>
      <div className={cn(styles.text, styles.description)}>{children}</div>
    </div>
  );
}
