import React from "react";
import axios from "axios";

const DeleteModal = ({ partsToModify, refetch, setPartsToModify }) => {
  const { _id } = partsToModify;
  const deleteProduct = (_id) => {
    axios
      .delete(`https://pitstop-parts-server.herokuapp.com/parts/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setPartsToModify(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-product" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="delete-product"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">
            Are You sure to delete this product?
          </h3>
          <button onClick={() => deleteProduct(_id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
