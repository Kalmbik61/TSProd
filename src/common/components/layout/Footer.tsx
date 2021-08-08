import React from "react";
import styles from "./Layout.module.scss";
import Link from "../global/Link/Link";
import logo from "../../../images/logo.png";
export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt='logo' />
      <div className={styles.terms}>
        <Link type='link'>Terms</Link>
        <Link type='link'>Privacy policy</Link>
      </div>
      <p className={styles.text}>© 2021 TRACELECC BOX. All Rights Reserved</p>
    </footer>
  );
}
