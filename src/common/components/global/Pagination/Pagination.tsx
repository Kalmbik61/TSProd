import React, { useState } from "react";
import { ReactComponent as Prev } from "../../../../images/icons/prev.svg";
import { ReactComponent as Next } from "../../../../images/icons/next.svg";
import Link from "../Link/Link";
import PaginationProps from "./Pagination.props";
import cn from "classnames";
import styles from "./Pagination.module.scss";
export default function Pagination({ ...props }: PaginationProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.pagination} {...props}>
      <div className={styles.link}>
        <Prev style={{ marginRight: 10 }} />
        <Link type='link'> previous </Link>
      </div>
      <div className={cn(styles.numbers)}>
        <span
          className={cn(styles.number, {
            [styles.active]: active,
          })}
        >
          1
        </span>
        <span
          className={cn(styles.number, {
            [styles.active]: true,
          })}
        >
          2
        </span>
        <span
          className={cn(styles.number, {
            [styles.active]: active,
          })}
        >
          3
        </span>
      </div>
      <div className={styles.link}>
        <Link type='link'> next </Link>
        <Next style={{ marginLeft: 10 }} />
      </div>
    </div>
  );
}
