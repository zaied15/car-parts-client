import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="my-20 height-adjust">
      <h3 className="text-2xl font-bold">Please Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered input-error w-full max-w-lg mt-5"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <p className="text-primary">
          {errors.name && <span>Name is required</span>}
          {errors.maxLength && <span>Name should between 30 characters</span>}
        </p>

        <input
          type="email"
          placeholder="Your email"
          className="input input-bordered input-error w-full max-w-lg my-5"
          {...register(
            "email",
            { required: true },
            {
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            }
          )}
        />
        <p className="text-primary">
          {errors.email && <span>Email is required</span>}
        </p>

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-error w-full max-w-lg"
          {...register("companyName", { required: true })}
        />
        <p className="text-primary">
          {errors.companyName && <span>Company name is required</span>}
        </p>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary w-full max-w-lg mt-10"
        />
      </form>
      <p className="mt-5 text-lg">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Login here
        </Link>
      </p>
      <div className="flex flex-col w-1/2 border-opacity-50 mx-auto">
        <div className="divider">OR</div>
        <div className="grid h-20 rounded-box place-items-center">
          <button className="btn btn-outline btn-error bg-base-100 w-96">
            <span className="border p-2 rounded">
              <i className="fa-brands fa-google"></i>
            </span>
            <span className="ml-3"> Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
