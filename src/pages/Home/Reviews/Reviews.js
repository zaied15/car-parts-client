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
      <div className="carousel w-full">
        {reverseReviews.slice(0, 3).map((reviewItem, index) => (
          <ReviewItem
            key={reviewItem._id}
            reviewItem={reviewItem}
            index={index}
          ></ReviewItem>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </section>
  );
};

export default Reviews;
