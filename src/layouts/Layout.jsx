import React from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
