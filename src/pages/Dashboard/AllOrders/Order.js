import axios from "axios";
import React from "react";

const Order = ({ order, index, setOrderDeleteAdmin, refetch }) => {
  const { _id, partsName, quantity, price, name, paid } = order;
  const shippingStatus = (id) => {
    axios(`https://pitstop-parts-server.herokuapp.com/shippingStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      refetch();
    });
  };
  return (
    <tr>
      <th>{index + 1}.</th>
      <th>{name}</th>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {paid ? (
          !order?.shipping_status ? (
            <button
              onClick={() => shippingStatus(_id)}
              className="btn btn-info mr-5"
            >
              Pending
            </button>
          ) : (
            <button
              onClick={() => shippingStatus(_id)}
              className="btn btn-success mr-5"
            >
              Shipped
            </button>
          )
        ) : (
          <>
            <button className="btn btn-warning mr-5">Unpaid</button>
          </>
        )}
        {!paid && (
          <label
            onClick={() => setOrderDeleteAdmin(order)}
            htmlFor="delete-order-admin"
            className="btn btn-danger"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default Order;
