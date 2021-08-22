import { createContext, PropsWithChildren } from "react";

export type PostsType = {
  date: string;
  id: string;
  img?: string;
  text: string;
  title: string;
};
export default interface IAppContext {
  newsData: PostsType[] | [];
}

export const AppContext = createContext<PostsType[]>([]);

export const AppAuthProvider = ({
  children,
  newsData,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  return <AppContext.Provider value={newsData}>{children}</AppContext.Provider>;
};
