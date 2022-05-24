import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../shared/Loading/Loading";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const addReviews = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const reviewText = e.target.review.value;
    const rating = e.target.rating.value;
    const review = {
      name: name,
      review: reviewText,
      rating: rating,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added Your Review");
        e.target.reset();
      });
  };
  return (
    <section className="height-adjust mt-28">
      <h2 className="text-2xl text-primary font-bold mb-3">
        Please Add Your Review
      </h2>
      <div>
        <form onSubmit={addReviews}>
          <input
            type="text"
            name="name"
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-lg"
          />
          <br />
          <textarea
            className="textarea textarea-bordered w-full max-w-lg my-3"
            placeholder="Your review"
            name="review"
            required
          ></textarea>
          <br />
          <select
            name="rating"
            className="select select-bordered w-full max-w-lg"
            required
          >
            <option disabled selected>
              Give a rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <input
            type="submit"
            value="Add Review"
            className="btn btn-bordered w-full max-w-lg my-3"
          />
        </form>
      </div>
    </section>
  );
};

export default AddReview;
