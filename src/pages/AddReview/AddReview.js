import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const addReviews = (e) => {
    e.preventDefault();
    const name = e.target.name.defaultValue;
    const reviewText = e.target.review.defaultValue;
    const rating = e.target.rating.defaultValue;
    const review = {
      name: name,
      review: reviewText,
      rating: rating,
    };

    fetch("https://pitstop-parts-server.herokuapp.com/review", {
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
    <section className="height-adjust">
      <h2 className="text-2xl text-primary font-bold mb-3">
        Please Add Your Review
      </h2>
      <div>
        <form onSubmit={addReviews}>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName || ""}
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
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="4">4</option>
            <option defaultValue="5">5</option>
          </select>
          <br />
          <input
            type="submit"
            defaultValue="Add Review"
            className="btn btn-bordered w-full max-w-lg my-3"
          />
        </form>
      </div>
    </section>
  );
};

export default AddReview;
