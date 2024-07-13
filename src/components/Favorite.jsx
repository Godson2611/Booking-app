import React from "react";
import favoriteDB from "../data/favoriteDB";

const Favorite = () => {
  return (
    <div className="container">
      <div className="row text-center my-5">
        <div className="col">
          <h1 className={`${favoriteDB.heading.className}`}>
            {favoriteDB.heading.text}
          </h1>
        </div>
        <div className="col">
          <button className={`${favoriteDB.seeBtn.className}`}>
            {favoriteDB.seeBtn.text}
          </button>
        </div>
      </div>
      <div className="row">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            {favoriteDB.CarouselItem.map((item, id) => (
              <div key={id} class={`carousel-item active position-relative`}>
                <img
                  src={item.img}
                  class="d-block w-100 rounded-4 img-fluid"
                  alt="..."
                />
                <div className="container z-index-1 ">
                  <div className="card rounded-4 border-0 w-lg-50 position-absolute end-0 bottom-0 me-md-2 mb-md-2 mx-2 mb-2">
                    <div class="card-body vh-lg-100">
                      <h5 class="card-title fs-3 fw-bold">
                        {item.card.heading}
                      </h5>
                      <p class="card-text fs-6">{item.card.subheading}</p>
                      <p class="card-text text-muted small">
                        {item.card.content}
                      </p>
                      <ul className="list-inline hstack flex-wrap gap-2 mb-3">
                        {item.card.details.map((details, id) => (
                          <li
                            key={id}
                            className="list-inline-item h6 fw-normal mb-0"
                          >
                            <i class={`${details.icon}`}></i>
                            {details.text}
                          </li>
                        ))}
                      </ul>
                      <p className="card-text fw-semibold">
                        {item.card.footcontent.text}
                        <i class={`${item.card.footcontent.icon}`}></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
