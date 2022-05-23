import React from "react";

const ReviewItem = ({ reviewItem }) => {
  const { name, review, rating } = reviewItem;
  return (
    <div className="card card-compact w-full shadow-xl border bg-white">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p>
          <span className="font-bold">Rating: {rating}</span>
        </p>
        <p className="my-3 overflow-hidden">{review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
