import { useState } from "react";
import cn from "classnames";
import Line from "../global/Line/Line";
import { links } from "./Header";
import Link from "../global/Link/Link";
import { ReactComponent as Instagram } from "../../../images/icons/inst.svg";
import { ReactComponent as Facebooke } from "../../../images/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../../images/icons/linkedin.svg";
import { ReactComponent as Youtube } from "../../../images/icons/you.svg";
import { ReactComponent as Twitter } from "../../../images/icons/twiter.svg";
import { ReactComponent as Telegram } from "../../../images/icons/telegram.svg";
import SupportModal from "../global/modals/SupportModal/SupportModal";
import useMediaQuery from "../hooks/useMediaQuery";
import styles from "./Layout.module.scss";

const terms = [
  {
    name: "Privacy policy",
    url: "#",
  },
  {
    name: "Terms & conditions",
    url: "#",
  },
  {
    name: "Cookie policy",
    url: "#",
  },
  {
    name: "Refund policy",
    url: "#",
  },
  {
    name: "Acceptable use policy",
    url: "#",
  },
  {
    name: "Disclaimer",
    url: "#",
  },
];
const icons = [
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/traceless_box/",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/company/75043704",
  },
  {
    icon: <Youtube />,
    link: "https://www.youtube.com/channel/UCs9OdnD49P2njJ-FNpMCrwg",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/Traceless_Box",
  },
  {
    icon: <Telegram />,
    link: "https://t.me/tracelessbox",
  },
  {
    icon: <Facebooke />,
    link: "https://www.facebook.com/tracelessbox/",
  },
];
export default function Footer(): JSX.Element {
  const tablet1024 = useMediaQuery("(max-width:1024px)");
  const tablet768 = useMediaQuery("(max-width:768px)");
  const mobile = useMediaQuery("(max-width:425px)");
  const [openSupport, setOpenSupport] = useState<boolean>(false);
  const renderLinks = () =>
    links.map(({ name, path, open }, i) => {
      return (
        <li key={i}>
          <Link type='router' to={path} onClick={open ? () => setOpenSupport(true) : undefined}>
            {name}
          </Link>
        </li>
      );
    });
  const renderTerms = () =>
    terms.map((item, i) => (
      <a className={styles.term} href={item.url} key={i}>
        {item.name}
      </a>
    ));
  const renderIcons = () =>
    icons.map((item, i) => (
      <a href={item.link} key={i} rel='noreferrer' target='_blank'>
        {item.icon}
      </a>
    ));

  const renderDesctop = () => (
    <div className={styles.footerBottom}>
      <div className={styles.icons}>
        {renderIcons()}
        {tablet1024 && (
          <>
            <br /> <span>©2021 Traceless Box</span>
          </>
        )}
      </div>
      <div className={styles.terms}>{renderTerms()}</div>
    </div>
  );
  const renderTablet = () => (
    <div className={styles.tablet}>
      <ul className={cn(styles.navFooter)}>{renderLinks()}</ul>
      <div className={styles.tabletTerms}>{renderTerms()}</div>
      <div className={styles.tabletBottom}>
        <div className={styles.tabletIcons}>{renderIcons()}</div>
        <span>©2021 Traceless Box</span>
      </div>
    </div>
  );
  const renderMobile = () => (
    <div className={styles.mobile}>
      <div className={styles.icons}>{renderIcons()}</div>
      <span>©2021 Traceless Box</span>
    </div>
  );
  return (
    <footer className={styles.footer}>
      <SupportModal isOpen={openSupport} onClose={setOpenSupport} />
      {tablet1024 && !tablet768 ? null : <Line color='grey' height={1} />}
      {!tablet768 ? <ul className={cn(styles.navFooter)}>{renderLinks()}</ul> : renderTablet()}
      {tablet1024 && tablet768 ? null : <Line color='grey' height={1} />}
      {!tablet768 && renderDesctop()}
      {mobile && renderMobile()}
    </footer>
  );
}
