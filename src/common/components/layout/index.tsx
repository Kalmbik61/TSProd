import { useEffect, useState } from "react";
import Subscribe from "../global/Subscribe/Subscribe";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "./Layout.props";
import { ReactComponent as Logo } from "../../../images/logo_max.svg";
import { ReactComponent as El } from "../../../images/el.svg";
import styles from "./Layout.module.scss";
import { AppAuthProvider, PostsType } from "../HOC/WithContext/AppAuthProvider";
import firebase from "../../../firebase";

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [postData, setPostData] = useState<PostsType[]>([]);
  const getPostData = async () => {
    await firebase
      .firestore()
      .collection("news")
      .onSnapshot((query) => {
        let fetchData: any = [];
        query.forEach((post) => {
          fetchData.push(post.data());
        });
        setPostData(fetchData);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <AppAuthProvider newsData={postData}>
      <div className={styles.layout}>
        <Header />
        <Subscribe />
        <div className={styles.container}>
          {children}
          <div className={styles.prefooter}>
            <Logo />
            <p>This project was developed by "Max Powers, LLC" IT & Electronics specialists</p>
            <El />
          </div>
          <Footer />
        </div>
      </div>
    </AppAuthProvider>
  );
}
