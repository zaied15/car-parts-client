import React from "react";
import useParts from "../../../hooks/useParts";
import Loading from "../../shared/Loading/Loading";
import BusinessInfo from "./BusinessInfo";
import CountUp from "react-countup";

const BusinessSummery = () => {
  const { parts, isLoading } = useParts();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const totalQuantity = parts
    .map((part) => part?.quantity)
    .reduce((a, b) => a + b);

  return (
    <div className="mt-10">
      <h3 className="text-4xl font-bold text-primary text-center mb-8">
        Business at a Glance
      </h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <BusinessInfo
          title="Offices in Country"
          count={<CountUp delay={3} end={27} />}
          icon={<i className="fa-solid fa-building-circle-arrow-right"></i>}
        ></BusinessInfo>
        <BusinessInfo
          title="Distributors"
          count={<CountUp delay={3} end={70} />}
          icon={<i className="fa-solid fa-store"></i>}
        ></BusinessInfo>
        <BusinessInfo
          title="Team Members"
          count={<CountUp delay={3} end={50} />}
          icon={<i className="fa-solid fa-people-group"></i>}
        ></BusinessInfo>
        <BusinessInfo
          title="Products in store"
          count={<CountUp delay={3} end={`${totalQuantity}`} />}
          icon={<i className="fa-solid fa-life-ring"></i>}
        ></BusinessInfo>
      </div>
    </div>
  );
};

export default BusinessSummery;
