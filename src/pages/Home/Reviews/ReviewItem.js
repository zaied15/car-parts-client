import React from "react";

const ReviewItem = ({ reviewItem, index }) => {
  const { name, review, rating } = reviewItem;
  return (
    <div id={`item${index + 1}`} className="carousel-item w-full">
      <div className="hero h-48 bg-base-100">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p>{review}</p>
            <p>
              <span className="font-bold">Rating: {rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
