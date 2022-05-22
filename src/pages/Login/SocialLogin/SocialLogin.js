import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="grid h-20 rounded-box place-items-center">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-error bg-base-100 w-96"
      >
        <span className="border p-2 rounded">
          <i className="fa-brands fa-google"></i>
        </span>
        <span className="ml-3"> Google</span>
      </button>
      <p className="text-error font-bold mt-3">{error ? error.message : ""}</p>
    </div>
  );
};

export default SocialLogin;
