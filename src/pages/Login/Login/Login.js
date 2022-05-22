import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="my-20 height-adjust">
      <h3 className="text-2xl font-bold">Please Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your Email"
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
          {...register("password", { required: true })}
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

export default Login;
