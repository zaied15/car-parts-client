import React from "react";

const Order = ({ order, index }) => {
  const { partsName, quantity, price, name } = order;
  return (
    <tr>
      <th>{index + 1}.</th>
      <th>{name}</th>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-success mr-5">Paid or Unpaid</button>
        <button className="btn btn-success mr-5">Pending Or Shipped</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default Order;
