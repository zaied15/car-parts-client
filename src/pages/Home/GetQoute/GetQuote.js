import React from "react";
import { useForm } from "react-hook-form";
import "./GetQuote.css";
const GetQuote = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="lg:flex bg-base-100 mt-20">
        <div className="w-100 lg:w-1/2 flex justify-center items-center bg-quote">
          <h2 className="text-4xl text-white font-bold my-5 lg:my-0">
            Get A Quote
            <br />
            For Bulk Quantity
          </h2>
        </div>
        <div className="w-100 lg:w-1/2 my-10">
          <h3 className="text-2xl font-bold">Fill The Form Below</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered input-error w-full max-w-lg my-5"
              {...register("email")}
            />
            <p className="text-primary">
              {errors.email && <span>Email is required</span>}
            </p>

            <input
              type="text"
              placeholder="Company Name"
              class="input input-bordered input-error w-full max-w-lg"
              {...register("companyName")}
            />
            <p className="text-primary">
              {errors.companyName && <span>Company name is required</span>}
            </p>

            <textarea
              class="textarea textarea-error w-full max-w-lg my-5"
              rows="5"
              placeholder="Write Details"
              {...register("message", { required: true })}
            ></textarea>
            <p className="text-primary">
              {errors.message && <span>Company name is required</span>}
            </p>

            <input
              type="submit"
              value="Get Quote"
              className="btn btn-primary"
            />
          </form>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4327328746936!2d90.3979240149837!3d23.87426928452847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43bb800c33f%3A0xd2b2df37f280ef37!2sNorth%20Tower%2C%20Sonargaon%20Janapath%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1653206869051!5m2!1sen!2sbd"
            height="400"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="w-full"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
