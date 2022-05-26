import React from "react";

const BusinessInfo = ({ title, count, icon }) => {
  return (
    <div className="rounded w-96 py-10 bg-base-100 shadow-xl flex justify-evenly items-center">
      <div className="text-4xl text-primary">{icon}</div>
      <div>
        <h2 className="font-bold text-2xl text-left text-primary">{count}+</h2>
        <p className="text-2xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default BusinessInfo;
