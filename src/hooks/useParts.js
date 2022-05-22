import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("car-parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return [parts];
};
export default useParts;