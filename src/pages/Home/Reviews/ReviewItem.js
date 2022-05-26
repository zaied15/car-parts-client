import React from "react";

const ReviewItem = ({ reviewItem, index }) => {
  const { name, review, rating } = reviewItem;
  const array = [...Array(parseInt(rating)).keys()].map((numbers) => numbers);
  return (
    <div id={`item${index + 1}`} className="carousel-item w-full">
      <div className="hero h-52 bg-base-100">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="my-3">{review}</p>
            <div className="rating">
              {Array.from(Array(parseInt(rating)).keys()).map((star) => (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
