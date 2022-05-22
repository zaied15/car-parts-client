import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ".//Login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="my-20 height-adjust">
      <h3 className="text-2xl font-bold">Please Login</h3>
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
          type="password"
          placeholder="Password"
          class="input input-bordered input-error w-full max-w-lg"
          {...register("companyName", { required: true })}
        />
        <p className="text-primary">
          {errors.companyName && <span>Company name is required</span>}
        </p>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary w-full max-w-lg mt-10"
        />
      </form>
      <p className="mt-5 text-lg">
        Are you new to here?{" "}
        <Link to="/register" className="text-primary">
          Please Register
        </Link>
      </p>
      <div class="flex flex-col w-1/2 border-opacity-50 mx-auto">
        <div class="divider">OR</div>
      </div>
    </section>
  );
};

export default Login;
