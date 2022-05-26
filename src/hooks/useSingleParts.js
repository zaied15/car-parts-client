import { useQuery } from "react-query";

const useSingleParts = (id) => {
  const {
    data: singleParts,
    isLoading,
    refetch,
  } = useQuery(["singleParts", id], () =>
    fetch(`https://pitstop-parts-server.herokuapp.com/parts/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return { singleParts, isLoading, refetch };
};

export default useSingleParts;
