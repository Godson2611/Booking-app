import React from "react";

const ExperienceCard = ({ cards }) => {
  return (
    // map =====================
    <>
      {cards.map((card, id) => (
        <div className="card position-relative p-0 m-0 border-0 rounded-5 mx-2 mx-md-3">
          <img
            src={card.img}
            className="card-img-top w-100 rounded-5"
            alt="..."
          />
          <div className="card-img-overlay glass__color rounded-5 d-flex flex-column justify-content-end p-3">
            <h5 className="card-title text-white">{card.title}</h5>
            <p className="card-text text-white">{card.content}</p>
            <p className="card-text text-white">
              <small className="fw-bold">{card.booking}</small>
            </p>
          </div>
        </div>
      ))}
    </>
    // withou map ================
    // <div className="card position-relative p-0 m-0 border-0 rounded-5 mx-2 mx-md-3">
    //   <img
    //     src="https://booking.webestica.com/assets/images/category/hotel/resort/3by4/01.jpg"
    //     className="card-img-top w-100 rounded-5"
    //     alt="..."
    //   />
    //   <div className="card-img-overlay glass__color rounded-5 d-flex flex-column justify-content-end p-3">
    //     <h5 className="card-title text-white">Card title1</h5>
    //     <p className="card-text text-white">
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </p>
    //     <p className="card-text text-white">
    //       <small className="fw-bold">Book now</small>
    //     </p>
    //   </div>
    // </div>
  );
};

export default ExperienceCard;
