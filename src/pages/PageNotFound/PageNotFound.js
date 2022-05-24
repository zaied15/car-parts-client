import React from "react";
import image404 from "../../images/404.jpg";

const PageNotFound = () => {
  return (
    <section className="height-adjust mt-28">
      <div className="text-center mt-5">
        <h2 className="text-2xl font-bold text-error">
          The Page you are looking for not found!!!
        </h2>
        <div className="mt-10">
          <img className="inline-block" src={image404} alt="404" />
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
