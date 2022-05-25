import React from "react";
import { Link } from "react-router-dom";

const MyOrder = ({ order, index }) => {
  const { _id, partsName, quantity, price } = order;
  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        <Link to={`/dashboard/payment/${_id}`} className="btn btn-success mr-5">
          Make Pay
        </Link>
        <button className="btn btn-danger">Cancel Order</button>
      </td>
    </tr>
  );
};

export default MyOrder;
