import React from "react";
import useParts from "../../../hooks/useParts";
import Loading from "../../shared/Loading/Loading";
import FeaturedPart from "./FeaturedPart";

const FeaturedParts = () => {
  const { parts, isLoading } = useParts();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-10">
      <h3 className="text-4xl font-bold text-primary text-center mb-8">
        Featured Parts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10">
        {parts.map((part) => (
          <FeaturedPart key={part._id} part={part}></FeaturedPart>
        ))}
      </div>
      <div className="divider mt-10"></div>
    </div>
  );
};

export default FeaturedParts;
