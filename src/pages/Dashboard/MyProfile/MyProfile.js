import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const updateProfile = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;
    const profile = {
      education,
      location,
      phone,
      linkedin,
    };
  };
  return (
    <div>
      <h3 className="text-2xl font-bold">
        Welcome Mr. {user?.displayName.toUpperCase()}
      </h3>
      <form
        onSubmit={updateProfile}
        className="bg-base-100 max-w-lg mt-10 py-10 pl-8 rounded"
      >
        <label>
          <span className="label-text font-bold">Your name</span>
        </label>
        <input
          type="text"
          value={user ? user.displayName : ""}
          disabled
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <label>
          <span className="label-text font-bold">Your Email</span>
        </label>
        <input
          type="email"
          value={user ? user.email : ""}
          disabled
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <label>
          <span className="label-text font-bold">Education</span>
        </label>
        <input
          type="text"
          name="education"
          placeholder="Your Education"
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <label>
          <span className="label-text font-bold">City/District</span>
        </label>
        <input
          type="text"
          name="location"
          placeholder="Current Location"
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <label>
          <span className="label-text font-bold">Phone</span>
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <label>
          <span className="label-text font-bold">LinkedIn</span>
        </label>
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          className="input input-bordered w-full max-w-md my-2"
        />
        <br />
        <input
          type="submit"
          value="Update Profile"
          className="btn btn-primary mt-5"
        />
      </form>
    </div>
  );
};

export default MyProfile;
