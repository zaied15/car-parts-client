import React from "react";

const Reviews = () => {
  return (
    <section className="pt-10">
      <h3 className="text-4xl font-bold text-primary text-center my-10">
        What Our Clients Says
      </h3>
      <div className="carousel rounded-box w-full">
        <div id="item1" className="carousel-item w-full">
          <div className="card w-full bg-base-100">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-36 mask mask-hexagon">
                  <img src="https://api.lorem.space/image/face?hash=55350" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tom Cruise</h2>
              <p>
                <span className="font-bold">Ratings: </span>5.0
              </p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="card w-full bg-base-100">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-36 mask mask-hexagon">
                  <img src="https://api.lorem.space/image/face?hash=55350" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">De Caprio</h2>
              <p>
                <span className="font-bold">Ratings: </span>5.0
              </p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </section>
  );
};

export default Reviews;
