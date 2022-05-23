import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [aUser] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user || aUser) {
    navigate(from, { replace: true });
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
        <p className="text-error font-bold">
          {errors.email && <span>Email is required</span>}
        </p>

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-error w-full max-w-lg"
          {...register("password", { required: true })}
        />
        <p className="text-error font-bold">
          {errors.password && <span>Password is required</span>}
        </p>
        <p className="text-error font-bold">{error ? error.message : ""}</p>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary w-full max-w-lg mt-10"
        />
      </form>
      <p className="mt-5 text-lg">
        Forgot your password?
        <Link to="/resetPassword" className="text-primary ml-1">
          Reset Password
        </Link>
      </p>
      <p className="mt-5 text-lg">
        Are you new to here?{" "}
        <Link to="/register" className="text-primary">
          Please Register
        </Link>
      </p>
      <div className="flex flex-col w-1/2 border-opacity-50 mx-auto">
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
