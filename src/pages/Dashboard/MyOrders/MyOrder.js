import React from "react";
import { Link } from "react-router-dom";

const MyOrder = ({ order, index, setMyOrderToDelete }) => {
  const { _id, partsName, quantity, price } = order;

  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>{order?.paid ? order?.transactionId : "Not paid yet!"}</td>
      <td>
        {!order.paid ? (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-warning mr-5"
          >
            Make Pay
          </Link>
        ) : (
          <button className="btn btn-success">Paid</button>
        )}
        {!order.paid && (
          <label
            onClick={() => setMyOrderToDelete(order)}
            htmlFor="my-order-delete"
            className="btn modal-button"
          >
            Cancel Order
          </label>
        )}

        {order?.paid && !order?.shipping_status ? (
          <button className="btn btn-info ml-5">Processing</button>
        ) : (
          ""
        )}
        {order?.paid && order?.shipping_status ? (
          <button className="btn btn-success ml-5">Completed</button>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default MyOrder;
