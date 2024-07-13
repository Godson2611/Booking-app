import React from "react";
import offersData from "../data/offersData";

const Offers = () => {
  return (
    <div className="container">
      <div className="row text-center my-5">
        <h1 className={offersData.heading.className}>
          {offersData.heading.text}
        </h1>
      </div>
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        {offersData.cards.map((card, id) => (
          <div key={id} class="col">
            <div class="card border-0">
              <img src={card.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold text-center fs-6">
                  {card.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
        <div class="col">
          <div class="card h-100 border-0">
            <div className="bg-light card-img-top position-relative h-100 fade__white ">
              <div className="btn btn-lg rounded-circle text-white navbtn__color  mb-0 position-absolute top-50 start-50 translate-middle">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold text-center fs-6">
                View All Offers
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
