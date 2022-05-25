import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../pages/shared/Loading/Loading";

const MakePayment = () => {
  const { orderId } = useParams();
  const { data: order, isLoading } = useQuery(
    ["orderToMakePayment", orderId],
    () =>
      fetch(`http://localhost:5000/order/${orderId}`, {
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
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Your Details:</h2>
          <p>
            Name: <span className="text-error">{order.name}</span>
          </p>
          <p>
            Email: <span className="text-error">{order.email}</span>
          </p>
          <p>
            <span className="text-error">
              Shipping Address: {order.address}
            </span>
          </p>
          <p>
            Country: <span className="text-error">{order.country}</span>
          </p>
        </div>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order?.partsName}</td>
              <td>{order?.quantity}</td>
              <td>{order?.price}</td>
              <td>
                <button className="btn btn-danger">Confirm Payment</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakePayment;
