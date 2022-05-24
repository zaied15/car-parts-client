import { useQuery } from "react-query";

const useSingleParts = (id) => {
  const {
    data: singleParts,
    isLoading,
    refetch,
  } = useQuery("singleParts", () =>
    fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
  );
  return { singleParts, isLoading, refetch };
};

export default useSingleParts;
