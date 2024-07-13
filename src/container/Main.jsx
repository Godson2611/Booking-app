import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Favorite from "../components/Favorite";
import Offers from "../components/Offers";
import HappyMoments from "../components/HappyMoments";
import Subscribe from "../components/Subscribe";

const Main = () => {
  return (
    <main>
      <About />
      <Experience />
      <Favorite />
      <Offers />
      <HappyMoments />
      <Subscribe />
    </main>
  );
};

export default Main;
