import React from "react";

const ReviewSliderNumber = ({ review, index }) => {
  return (
    <a href={`#item${index + 1}`} className="btn btn-xs">
      {index + 1}
    </a>
  );
};

export default ReviewSliderNumber;
