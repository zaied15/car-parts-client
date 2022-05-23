import { useQuery } from "react-query";

const useReviews = () => {
  const {
    data: reviews,
    isLoading,
    error,
    refetch,
  } = useQuery("review", () => fetch("http://localhost:5000/review"));
};
