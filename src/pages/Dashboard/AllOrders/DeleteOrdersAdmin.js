import axios from "axios";
import React from "react";

const DeleteOrdersAdmin = ({
  orderDeleteAdmin,
  refetch,
  setOrderDeleteAdmin,
}) => {
  const { _id } = orderDeleteAdmin;
  const deleteProductAdmin = (id) => {
    axios
      .delete(
        `https://pitstop-parts-server.herokuapp.com/adminOrderDelete/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        setOrderDeleteAdmin(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-order-admin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="delete-order-admin"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">
            Are You sure to delete this product?
          </h3>
          <button
            onClick={() => deleteProductAdmin(_id)}
            className="btn btn-danger"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrdersAdmin;
