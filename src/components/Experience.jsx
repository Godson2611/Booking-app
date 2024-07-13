import React from "react";
import ExperienceSlider from "./ExperienceSlider";
import ExperienceData from "../data/ExperienceData";

const Experience = () => {
  return (
    <div className="pt-5 pt-md-8 pb-0">
      <div className="container-fluid px-lg-5 my-4">
        <div className="row mb-3 mb-lg-5">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-bold black">
              {ExperienceData.heading}
            </h2>
          </div>
        </div>
        <div className="row">
          <ExperienceSlider cards={ExperienceData.cards} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
