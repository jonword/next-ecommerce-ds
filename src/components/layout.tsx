import React, { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
