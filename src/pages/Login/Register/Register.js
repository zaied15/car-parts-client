import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [displayName, setDisplayName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, upError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (confirmPassword === password) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      reset();
      error.message = "Password does not matched. Please try again.";
    }
  };
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
        <p className="text-error font-bold">
          {errors.name && <span>Name is required</span>}
        </p>
        <p className="text-error font-bold">
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
          {errors.Password && <span>Password is required</span>}
        </p>
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered input-error w-full max-w-lg mt-5"
          {...register("confirmPassword", { required: true })}
        />
        <p className="text-error font-bold">
          {errors.confirmPassword && <span>Confirm Password is required</span>}
        </p>
        <p className="text-error font-bold">{error ? error.message : ""}</p>
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
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Register;
