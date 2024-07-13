import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Import the CSS for styles
import ExperienceCard from "./ExperienceCard";

const ExperienceSlider = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  // const card = ExperienceData.cards.map((card, id) => {
  //   const img = card.img;
  //   const title = card.title;
  //   const content = card.content;
  //   const booking = card.booking;
  // });
  // const items = [<Experi];

  const items = [<ExperienceCard />, <ExperienceCard />, <ExperienceCard />];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
      disableDotsControls
      infinite
      buttonsDisabled
      renderPrevButton={() => (
        <button className="carousel-control-prev" type="button">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      renderNextButton={() => (
        <button className="carousel-control-next" type="button">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      )}
    />
  );
};

export default ExperienceSlider;
