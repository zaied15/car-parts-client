import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import ReviewItem from "./ReviewItem";
import ReviewSliderNumber from "./ReviewSliderNumber";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("review", () =>
    fetch(`https://pitstop-parts-server.herokuapp.com/review`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="pt-10">
      <h3 className="text-4xl font-bold text-primary text-center my-10">
        What Our Clients Says
      </h3>
      <div className="carousel w-full">
        {reviews.map((reviewItem, index) => (
          <ReviewItem
            key={reviewItem._id}
            reviewItem={reviewItem}
            index={index}
          ></ReviewItem>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {reviews.map((review, index) => (
          <ReviewSliderNumber
            key={review._id}
            index={index}
          ></ReviewSliderNumber>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
