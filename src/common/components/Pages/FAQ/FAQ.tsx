import Accordion from "../../global/Accordion/Accordion";
import styles from "./FAQ.module.scss";

export default function FAQ(): JSX.Element {
  return (
    <div className={styles.faq}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.descr}>
        <Accordion title='Lorem title' className={styles.accordion}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </Accordion>
        <Accordion title='Lorem title' className={styles.accordion}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </Accordion>
        <Accordion title='Lorem title' className={styles.accordion}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </Accordion>
        <Accordion title='Lorem title' className={styles.accordion}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </Accordion>
      </div>
    </div>
  );
}
