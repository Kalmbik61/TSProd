import React, { useState, memo } from "react";
import NewsPostProps from "./News.props";
import { ReactComponent as More } from "../../../../images/icons/next.svg";
import styles from "./NewsPost.module.scss";
import cn from "classnames";
import Line from "../Line/Line";
import useMediaQuery from "../../hooks/useMediaQuery";

function NewsPost({ postsData }: NewsPostProps) {
  const { title, date, img, text, id } = postsData;
  const [openPost, setOpenPost] = useState<boolean>(false);
  const [isMore, setIsMore] = useState<boolean>(false);
  const mobile = useMediaQuery("(max-width:425px)");
  const cropText = (string: string): string =>
    string.length > 200 ? string.slice(0, !mobile ? 200 : 140).concat("...") : string;

  return (
    <div
      className={cn(styles.post, {
        [styles.isMore]: isMore,
      })}
      onClick={() => setOpenPost(!openPost)}
    >
      <div className={styles.postPreview}>
        {img && <div className={styles.img} style={{ backgroundImage: ` url(${img})` }} />}
        <div className={styles.subDescr}>
          <span className={styles.date}>{date}</span>
          <h4 className={styles.title}>{title}</h4>
          <Line color='white' height={2} className={styles.deviver} />
          <p
            className={styles.descr}
            dangerouslySetInnerHTML={{ __html: isMore ? text : cropText(text) }}
          />

          {text.length > 200 && (
            <More
              className={cn(styles.more, {
                [styles.opened]: isMore,
              })}
              onClick={() => setIsMore(!isMore)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(NewsPost);
