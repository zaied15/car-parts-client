import React from "react";

const FeaturedPart = ({ part }) => {
  const { name, price, minOrder, quantity, description, img } = part;
  return (
    <div className="card card-compact w-full shadow-xl border bg-white">
      <figure className="relative">
        <img src={img} alt="Shoes" className="border-b" />
        <p className="bg-primary text-white absolute bottom-0 right-0 text-xl py-2 px-4 rounded">
          ${price} / <span className="text-sm">{minOrder}pcs</span>
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
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPart;
