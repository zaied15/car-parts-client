import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useSingleParts from "../../hooks/useSingleParts";
import Loading from "../shared/Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const { singleParts, isLoading } = useSingleParts(id);
  const [quantity, setQuantity] = useState(
    singleParts?.minOrder ? singleParts?.minOrder : localStorage.getItem(id)
  );
  const [error, setError] = useState("");

  if (isLoading) {
    return <Loading></Loading>;
  }
  const orderNow = (e) => {
    e.preventDefault();
    const name = user?.name;
    const email = user?.email;
    const newQuantity = quantity;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const country = e.target.country.value;
    const orderDetails = {
      name,
      email,
      quantity: newQuantity,
      phone,
      address,
      country,
    };
    axios.post("http://localhost:5000/order", orderDetails).then((res) => {
      toast.success("Order placed successfully");
    });
  };

  const changeQuantity = (increase) => {
    if (increase && quantity > 0) {
      let newQuantity = parseInt(quantity) + 1;
      setQuantity(newQuantity);

      if (newQuantity < singleParts.minOrder) {
        setError(`You have to order minimum ${singleParts.minOrder} parts`);
      } else if (newQuantity > singleParts.quantity) {
        setError(
          `You can not order more then available quantity of: ${singleParts.quantity}`
        );
      } else {
        setError("");
      }
    } else if (!increase && quantity > 1) {
      let newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity);
      if (newQuantity < singleParts.minOrder) {
        setError(`You have to order minimum ${singleParts.minOrder} items`);
      } else if (newQuantity > singleParts.quantity) {
        setError(
          `You can not order more then available quantity of: ${singleParts.quantity}`
        );
      } else {
        setError("");
      }
    }
  };

  return (
    <section className="bg-base-100 pt-10 pb-5">
      <h3 className="text-xl font-bold">
        You are almost near to order the parts:{" "}
        <span className="text-primary text-2xl">{singleParts.name}</span>
      </h3>
      <div className="my-5 text-left w-3/4 mx-auto text-xl">
        <p>
          <span className="font-bold text-primary">Parts Details: </span>
          <span className="text-lg">{singleParts.description}</span>
        </p>
        <p>
          <span className="font-bold text-primary">In Stock:</span>{" "}
          {singleParts.quantity}
        </p>
        <p>
          <span className="font-bold text-primary">Min. Order:</span>{" "}
          {singleParts.minOrder}
        </p>
      </div>
      <div className="lg:flex">
        <div className="w-full lg:w-1/2 text-left relative">
          <form onSubmit={orderNow} className="max-w-100 mb-10 pl-8 rounded">
            <span className="font-bold">Your name</span>
            <br />
            <input
              type="text"
              value={user ? user.displayName : ""}
              readOnly
              className="input input-bordered w-full max-w-md my-2"
            />
            <br />
            <span className="label-text font-bold">Your Email</span>
            <br />
            <input
              type="email"
              value={user ? user.email : ""}
              readOnly
              className="input input-bordered w-full max-w-md my-2"
            />
            <br />
            <span className="label-text font-bold">Phone</span>
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full max-w-md my-2"
            />
            <br />
            <span className="label-text font-bold">Address</span>
            <br />
            <input
              type="text"
              name="address"
              placeholder="Your address"
              required
              className="input input-bordered w-full max-w-md my-2"
            />
            <br />
            <span className="label-text font-bold">Country</span>
            <br />
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="input input-bordered w-full max-w-md my-2"
            />
            <br />
            <input
              type="submit"
              value="Make Order"
              disabled={error}
              className="btn btn-primary mt-5 absolute bottom-0 right-[-50px]"
            />
          </form>
        </div>
        <div className="w-full lg:w-1/2 text-left lg:ml-10">
          <label>
            <span className="label-text font-bold">Parts name</span>
          </label>
          <br />
          <input
            type="text"
            name="name"
            value={singleParts ? singleParts.name : ""}
            readOnly
            className="input input-bordered w-full max-w-md my-2"
          />
          <br />
          <label>
            <span className="label-text font-bold">Quantity</span>
          </label>
          <br />
          <input
            type="text"
            name="quantity"
            value={quantity}
            readOnly
            className="input input-bordered w-full max-w-md my-2"
          />
          <p className="text-error font-bold mb-2">{error ? error : ""}</p>
          <button
            onClick={() => changeQuantity(false)}
            className="btn btn-danger mx-2 text-xl"
          >
            -
          </button>
          <button
            onClick={() => changeQuantity(true)}
            className="btn btn-success text-xl"
          >
            +
          </button>
          <br />
          <p className="text-2xl font-bold mt-10">
            Total Price:{" "}
            <span className="text-error">${quantity * singleParts.price}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
