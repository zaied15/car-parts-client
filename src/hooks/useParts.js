import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [partsLoading, setPartsLoading] = useState(true);
  useEffect(() => {
    fetch("car-parts.json")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
        setPartsLoading(false);
      });
  }, []);
  return [parts, partsLoading];
};
export default useParts;
