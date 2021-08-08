import React from "react";
import Subscribe from "../global/Subscribe/Subscribe";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "./Layout.props";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <Subscribe />
      {children}
      <Footer />
    </div>
  );
}
