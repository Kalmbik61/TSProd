import React, { useState } from "react";
import Link from "../global/Link/Link";
import styles from "./Layout.module.scss";
import logo from "../../../images/logo.png";
import { ReactComponent as CES } from "../../../images/icons/ces-seeklogo.com.svg";
import SupportModal from "../global/modals/SupportModal/SupportModal";
import useMediaQuery from "../hooks/useMediaQuery";
import Burger from "../global/Burger/Burger";
import cn from "classnames";

export const links = [
  {
    path: "/",
    name: "Connecting Blockchain & Real World",
  },
  {
    path: "/features",
    name: "Features",
  },
  {
    path: "/handicap",
    name: "Handicap Accessible",
  },
  {
    path: "/news",
    name: "News",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
  {
    path: "/press",
    name: "Press Release",
  },
  { path: "#", name: "Contacts", open: true },
];
function Header(): JSX.Element {
  const [openSupport, setOpenSupport] = useState<boolean>(false);
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const isTablet = useMediaQuery("(max-width:768px)");
  const renderLinks = () => {
    return links.map(({ name, path, open }, i) => {
      return (
        <li key={i} onClick={() => isTablet && setOpenBurger(false)}>
          <Link type='router' to={path} onClick={open ? () => setOpenSupport(true) : undefined}>
            {name}
          </Link>
        </li>
      );
    });
  };
  return (
    <header className={styles.nav_wrapper}>
      <SupportModal isOpen={openSupport} onClose={setOpenSupport} />
      <div
        className={cn(styles.logo_wrapper, {
          [styles.tablet]: isTablet,
        })}
      >
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles.CES}>
          See us on <CES style={{ margin: "0 10px", width: 65, height: 38 }} /> LVCC North, Booth
          10172 | Jan-5 to Jan-8"
        </div>
        {isTablet && <Burger isOpen={openBurger} onClickHandler={setOpenBurger} />}
      </div>
      <ul
        className={cn(styles.nav, {
          [styles.active]: openBurger,
        })}
      >
        {renderLinks()}
      </ul>
    </header>
  );
}
export default Header;
