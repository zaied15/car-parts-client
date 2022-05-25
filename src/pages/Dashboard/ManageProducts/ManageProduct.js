import React from "react";

const ManageProduct = ({ product, index, setPartsToModify }) => {
  const { name, quantity, minOrder, price, img } = product;

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
        <label
          onClick={() => setPartsToModify(product)}
          htmlFor="delete-product"
          className="btn btn-danger"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageProduct;
