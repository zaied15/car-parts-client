import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <h3 className="text-2xl font-bold">My Order List</h3>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Min. Order</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageProduct
                key={product._id}
                product={product}
                index={index}
              ></ManageProduct>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
