import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import DeleteMyOrder from "./DeleteMyOrder";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrderToDelete, setMyOrderToDelete] = useState([]);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order?email=${user.email}`, {
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
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrder
                key={order._id}
                order={order}
                index={index}
                setMyOrderToDelete={setMyOrderToDelete}
              ></MyOrder>
            ))}
          </tbody>
        </table>
      </div>
      {myOrderToDelete && (
        <DeleteMyOrder
          key={myOrderToDelete._id}
          myOrder={myOrderToDelete}
          refetch={refetch}
          setMyOrderToDelete={setMyOrderToDelete}
        ></DeleteMyOrder>
      )}
    </section>
  );
};

export default MyOrders;
