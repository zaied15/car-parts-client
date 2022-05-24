import React from "react";

const ManageProduct = ({ product, index }) => {
  const { name, description, quantity, minOrder, price, img } = product;
  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{minOrder}</td>
      <td>
        <img src={img} alt="" className="w-24 rounded" />
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ManageProduct;
