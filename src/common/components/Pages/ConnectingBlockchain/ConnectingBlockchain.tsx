import styles from "./ConnectingBlockchain.module.scss";

import i1 from "../../../../images/imgs/connecting/i1.png";
import i2 from "../../../../images/imgs/connecting/i2.png";
import i3 from "../../../../images/imgs/connecting/i3.png";
import i4 from "../../../../images/imgs/connecting/i4.png";

export default function ConnectingBlockchain(): JSX.Element {
  return (
    <div className={styles.connectingBlockchain}>
      <div className={styles.controlBlock}>
        <h1 className={styles.title}>
          Traceless Box can control the lock based on Blockchain events
        </h1>
        <img src={i1} alt={"..."} />
        <div className={styles.textImgs}>
          <p> Bluetooth Enabled Lock </p>
          <p> Blockchain </p>
        </div>
        <div className={styles.description}>
          <h4 className={styles.descrTitle}> Vice versa</h4>
          <ul className={styles.list}>
            <li>The lock can be unlocked when crypto payments is received.</li>
            <li>
              When lock returns to the locked position, deposit can be returned to the over the
              blockchain.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.ordersBlock}>
        <h2 className={styles.title}>Rent your home</h2>
        <img src={i2} alt={"..."} />
        <div className={styles.description}>
          <p>
            New opportunities are opening to the home owner when the “Box” is used to rent out their
            properties.
          </p>
          <p>
            Home owners can use the "Box" to pay less fees on websites like AirBnB and their payment
            processing merchants.
          </p>
          <ul>
            <li>Fast, Cheap, and reversible payments using blockchain.</li>
            <li>
              Smart gadgets, such as entrance lock, com be controlled by the tenant during the paid
              period.
            </li>
            <li>
              Everything is remote — each tenant receives a unique digital key that's sent upon the
              payment receipt. The key is activated and deactivated automatically.
            </li>
            <li>
              Check each tenant's rental history and renews written by other homeowners, veritable
              through blockchain.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.incomeBlock}>
        <h2 className={styles.title}>Rent your stuff</h2>
        <img src={i3} alt={"..."} />
        <div className={styles.description}>
          <p>
            Participate in the "Shared Economy" and earn additional income. Other your guests on the
            experience they never had.
          </p>
          <ul>
            <li>
              Minibar filled with local beverages can be accessible after guests pays for it.{" "}
            </li>
            <li>Different means of transportation can be offered at an additional charge.</li>
            <li>Paid laundry or pool access is a reality now. Earn more by offering more.</li>
          </ul>
        </div>
      </div>

      <div className={styles.safeBlock}>
        <h2 className={styles.title}>Make your home smarter</h2>
        <img src={i4} alt={"..."} />
        <div className={styles.description}>
          <p>Traceless Box will optimize your visitor's stay and save you money.</p>
          <ul>
            <li>Increase guest satisfaction with programmable gadget controls.</li>
            <li>
              Guests are more likely to turn off-air conditioner and heater when they can turn it
              back remotely.
            </li>
            <li>Offer additional things to your visitors and earn more.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
