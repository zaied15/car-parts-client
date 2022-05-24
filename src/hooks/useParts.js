import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useParts = () => {
  // const [parts, setParts] = useState([]);
  // const [partsLoading, setPartsLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/parts")
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
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );
  return { parts, isLoading, refetch };
};
export default useParts;
