import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../pages/shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3EJ5JAf08m5hpMFUdj564JrpeWCGqHxboboEC2yx62xmB3ZzgtyExg8EzZS80sHVsJHgLKWPkJyos1zBN8q7A200sYbkEr9d"
);

const MakePayment = () => {
  const { orderId } = useParams();
  const { data: order, isLoading } = useQuery(
    ["orderToMakePayment", orderId],
    () =>
      fetch(`https://pitstop-parts-server.herokuapp.com/order/${orderId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl text-primary font-bold">
              Shipping Details:
            </h2>
            <div className="font-bold">
              <p>
                Name: <span className="text-error">{order.name}</span>
              </p>
              <p>
                Email: <span className="text-error">{order.email}</span>
              </p>
              <p>
                Shipping Address:
                <span className="text-error"> {order.address}</span>
              </p>
              <p>
                Country: <span className="text-error">{order.country}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl text-primary font-bold">
              Order Details:
            </h2>
            <div className="font-bold">
              <p>
                Parts Name:{" "}
                <span className="text-error">{order.partsName}</span>
              </p>
              <p>
                Quantity: <span className="text-error">{order.quantity}</span>
              </p>
              <p>
                Total Price:
                <span className="text-error"> ${order.price}</span>
              </p>
              <p>
                Country: <span className="text-error">{order.country}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="card max-w-lg bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title text-xl text-primary font-bold mb-5">
              Payment Details:
            </h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakePayment;
