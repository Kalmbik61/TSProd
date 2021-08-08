import React, { useState } from "react";
import Link from "../global/Link/Link";
import styles from "./Layout.module.scss";
import logo from "../../../images/logo.png";
import SupportModal from "../global/modals/SupportModal/SupportModal";
export default function Header(): JSX.Element {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/tech",
      name: "Tech",
    },
    {
      path: "/news",
      name: "News",
    },
    {
      path: "/faq",
      name: "FAQ",
    },
    { path: "#", name: "Support", open: true },
  ];
  const [openSupport, setOpenSupport] = useState<boolean>(false);
  const renderLinks = () => {
    return links.map(({ name, path }, i) => {
      return (
        <li key={i} onClick={() => setOpenSupport(true)}>
          <Link type='router' to={path}>
            {name}
          </Link>
        </li>
      );
    });
  };
  return (
    <header className={styles.nav_wrapper}>
      <SupportModal isOpen={openSupport} onClose={setOpenSupport} />
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <ul className={styles.nav}>{renderLinks()}</ul>
    </header>
  );
}
