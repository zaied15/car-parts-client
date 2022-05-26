import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useParts = () => {
  // const [parts, setParts] = useState([]);
  // const [partsLoading, setPartsLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://pitstop-parts-server.herokuapp.com/parts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setParts(data);
  //       setPartsLoading(false);
  //     });
  // }, []);
  // return [parts, partsLoading];
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://pitstop-parts-server.herokuapp.com/parts").then((res) =>
      res.json()
    )
  );
  return { parts, isLoading, refetch };
};
export default useParts;
