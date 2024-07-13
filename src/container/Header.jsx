import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const Header = () => {
  return (
    <header className="vh-100 vw-100 header__container">
      {/* <img className='position-absolute img-fluid cover-fill  ' src="https://booking.webestica.com/assets/images/category/hotel/resort/bg-01.jpg" alt="" /> */}
      <Navbar />
      <Intro />
    </header>
  );
};

export default Header;
