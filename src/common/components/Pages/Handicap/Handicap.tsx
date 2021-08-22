import styles from "./Handicap.module.scss";

import handicap from "../../../../images/imgs/handicap/handicap.png";
export default function Handicap() {
  return (
    <div className={styles.handicap}>
      <h1 className={styles.title}> Handicap Accessible</h1>
      <div className={styles.content}>
        <img src={handicap} alt='...' />
        <div className={styles.descr}>
          <ul>
            <li>Сlose doors remotely</li>
            <li>See who is calling the doorbell</li>
          </ul>
          <ul>
            <li>Check sensor status remotely</li>
            <li>Control the shades, curtains, and blinds</li>
          </ul>
          <ul>
            <li>Effortless control of your house</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
