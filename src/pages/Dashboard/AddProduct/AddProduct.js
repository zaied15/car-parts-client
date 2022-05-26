import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const minOrder = e.target.minOrder.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const img = e.target.image.value;
    const productObj = {
      name,
      price,
      minOrder,
      quantity,
      description,
      img,
    };
    axios({
      method: "POST",
      url: "https://pitstop-parts-server.herokuapp.com/parts",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: productObj,
    }).then((res) => {
      e.target.reset();
      toast.success("Product Added Successfully");
    });
  };
  return (
    <section className="height-adjust">
      <h2 className="text-2xl text-primary font-bold mb-3">Add A Product</h2>
      <div>
        <form onSubmit={addProduct}>
          <input
            type="text"
            name="name"
            placeholder="Parts Name"
            required
            className="input input-bordered w-full max-w-lg"
          />
          <br />
          <textarea
            className="textarea textarea-bordered w-full max-w-lg my-3"
            placeholder="Parts Description"
            name="description"
            required
          ></textarea>
          <br />
          <input
            type="number"
            name="price"
            placeholder="Price per unit"
            required
            className="input input-bordered w-full max-w-lg"
          />
          <br />

          <input
            type="number"
            name="quantity"
            placeholder="Available Quantity"
            required
            className="input input-bordered w-full max-w-lg my-3"
          />
          <br />
          <input
            type="number"
            name="minOrder"
            placeholder="Minimum Order Quantity"
            required
            className="input input-bordered w-full max-w-lg"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Parts Image Link"
            required
            className="input input-bordered w-full max-w-lg my-3"
          />
          <br />
          <input
            type="submit"
            value="Add Product"
            className="btn btn-bordered w-full max-w-lg my-3"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
