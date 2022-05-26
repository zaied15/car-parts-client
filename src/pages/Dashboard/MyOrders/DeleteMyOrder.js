import axios from "axios";
import React from "react";

const DeleteMyOrder = ({ myOrder, refetch, setMyOrderToDelete }) => {
  const { _id } = myOrder;
  const deleteMyOrder = (id) => {
    axios
      .delete(`https://pitstop-parts-server.herokuapp.com/myOrder/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setMyOrderToDelete(null);
        refetch();
        console.log('success');
      });
  };
  return (
    <section>
      <input type="checkbox" id="my-order-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-order-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">
            Are You sure to delete this product?
          </h3>
          <button onClick={() => deleteMyOrder(_id)} className="btn btn-danger">
            Yes, Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteMyOrder;
