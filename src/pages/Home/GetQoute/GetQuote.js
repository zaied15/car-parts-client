import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./GetQuote.css";
const GetQuote = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Submitted successfully");
  };
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
              {...register(
                "email",
                { required: true },
                {
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                }
              )}
            />
            <p className="text-primary">
              {errors.email && <span>Email is required</span>}
            </p>

            <input
              type="text"
              placeholder="Company Name"
              class="input input-bordered input-error w-full max-w-lg"
              {...register("companyName", { required: true })}
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
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
