import React from "react";
import introDB from "../data/introDB";

const Intro = () => {
  return (
    <div className="position-relative py-8 py-sm-9 align-iterm-center">
      <div className="container z-index-1 position-relative">
        <div className="row">
          <div className="col-xl-8 m-auto text-center py-xl-8 mt-5 py-5">
            <h1 className={`${introDB.heading.className}`}>
              {introDB.heading.text}
            </h1>
            <h5 className={`${introDB.subHeading.className}`}>
              {introDB.subHeading.text}
            </h5>
            <a href="#" className={`${introDB.button.className} black__color`}>
              {introDB.button.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
