import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const resetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      e.target.reset();
      toast.success("Reset Password Sent");
    } else {
      toast.error("Please enter your email.");
    }
  };
  return (
    <div className="height-adjust mt-28">
      <h2 className="text-3xl font-bold mb-3">Enter Your Email</h2>
      <form onSubmit={resetPassword}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="submit"
          value="Reset Password"
          className="btn w-full max-w-xs my-3"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
