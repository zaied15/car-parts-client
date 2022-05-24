import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import Order from "./Order";

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order`, {
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
      <h3 className="text-2xl font-bold">My Order List</h3>
      <div class="overflow-x-auto mt-10">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>User Name</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order key={order._id} order={order} index={index}></Order>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllOrders;
