import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedPart = ({ part }) => {
  const { _id, name, price, minOrder, quantity, description, img } = part;
  const navigate = useNavigate();

  const handlePurchase = (_id) => {
    localStorage.setItem(_id, minOrder);
    navigate(`/purchase/${_id}`);
    // fetch(`https://pitstop-parts-server.herokuapp.com/parts/${_id}`, {
    //   method: "GET",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => localStorage.setItem(data._id, data.minOrder));
  };
  return (
    <div className="card card-compact w-full shadow-xl border bg-white">
      <figure className="relative">
        <img src={img} alt="Shoes" className="border-b" />
        <p className="bg-primary text-white absolute bottom-0 right-0 text-xl py-2 px-4 rounded">
          ${price} / <span className="text-sm">unit</span>
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between my-3">
          <p className="flex-grow-0">
            <span className="font-bold">Min. Order: </span>
            {minOrder}
          </p>
          <p className="flex-grow-0">
            <span className="font-bold">Available quantity: </span>
            {quantity}
          </p>
        </div>
        <p className="my-3">{description}</p>
        <div className="card-actions justify-center pt-3">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn btn-primary w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPart;
