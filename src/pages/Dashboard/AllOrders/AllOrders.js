import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import DeleteOrdersAdmin from "./DeleteOrdersAdmin";
import Order from "./Order";

const AllOrders = () => {
  const [orderDeleteAdmin, setOrderDeleteAdmin] = useState([]);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://pitstop-parts-server.herokuapp.com/orders`, {
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
      <h3 className="text-2xl font-bold text-primary">ALL ORDERS</h3>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
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
              <Order
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                setOrderDeleteAdmin={setOrderDeleteAdmin}
              ></Order>
            ))}
          </tbody>
        </table>
      </div>
      {orderDeleteAdmin && (
        <DeleteOrdersAdmin
          key={orderDeleteAdmin._id}
          orderDeleteAdmin={orderDeleteAdmin}
          refetch={refetch}
          setOrderDeleteAdmin={setOrderDeleteAdmin}
        ></DeleteOrdersAdmin>
      )}
    </section>
  );
};

export default AllOrders;
