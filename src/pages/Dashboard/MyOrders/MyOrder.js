import React from "react";

const MyOrder = ({ order, index }) => {
  const { partsName, quantity, price } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-success mr-5">Make Pay</button>
        <button className="btn btn-danger">Cancel</button>
      </td>
    </tr>
  );
};

export default MyOrder;
