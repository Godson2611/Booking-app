import React from "react";
import aboutData from "../data/aboutData.js";

const About = () => {
  return (
    <div className="pt-5 pt-md-8 pb-0">
      <div className="container">
        <div className="row my-0 my-2 my-lg-4">
          <div className="col-lg-10 m-auto text-center ">
            <h2 className={`${aboutData.heading.className} black`}>
              {aboutData.heading.text}
            </h2>
            <p className={`${aboutData.para.className}`}>
              {aboutData.para.text}
            </p>
            <ul className="list-inline hstack gap-4 flex-wrap justify-content-center mt-4">
              {aboutData.features.map((value, index) => (
                <li key={index} className="list-inline-item">
                  <h5>
                    <i class={`${value.icon}`}></i>
                    {value.text}
                  </h5>
                </li>
              ))}
            </ul>
            <div className="d-sm-flex justify-content-center align-items-center mt-4">
              <div className="d-flex justify-content-center align-items-center text-start me-0 me-sm-4">
                <h3 className="me-2 mb-0">{aboutData.rate.rating}</h3>
                <div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mb-0 small">
                      <i class="fa fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item mb-0 small">
                      <i class="fa fa-sta text-warning"></i>
                    </li>
                    <li className="list-inline-item mb-0 small">
                      <i class="fa fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item mb-0 small">
                      <i class="fa fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item mb-0 small">
                      <i class="fa fa-star-half-alt text-warning"></i>
                    </li>
                  </ul>
                  <p className="mb-0 small">{aboutData.button.text}</p>
                </div>
              </div>

              <div>
                <a
                  className="btn btn-lg btn-dark mb-0 ms-2 black__color fw-bold py-3 px-4 fs-6"
                  href="#"
                >
                  Explore now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
