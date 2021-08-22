import { useContext } from "react";
import NewsPost from "../../global/NewsPost/NewsPost";
import styles from "./News.module.scss";
import { AppContext } from "../../HOC/WithContext/AppAuthProvider";

export default function News(): JSX.Element {
  const context = useContext(AppContext);
  return (
    <div className={styles.news}>
      <h1 className={styles.title}>News</h1>
      <div className={styles.body}>
        {context.length === 0 ? (
          <span> no news yet </span>
        ) : (
          context.map((post) => <NewsPost postsData={post} key={post.id} />)
        )}
      </div>
    </div>
  );
}
