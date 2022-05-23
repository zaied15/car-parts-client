import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("review", () =>
    fetch(`http://localhost:5000/review`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const reverseReviews = reviews.map((review) => review).reverse();

  return (
    <section className="pt-10">
      <h3 className="text-4xl font-bold text-primary text-center my-10">
        What Our Clients Says
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-48">
        {reverseReviews.slice(0, 3).map((reviewItem) => (
          <ReviewItem key={reviewItem._id} reviewItem={reviewItem}></ReviewItem>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
