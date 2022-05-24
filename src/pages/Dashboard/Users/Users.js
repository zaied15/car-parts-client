import React from "react";
import { useQuery } from "react-query";
import User from "./User";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return (
    <section>
      <h3 className="text-2xl font-bold">My Order List</h3>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SL.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={user._id} user={user} index={index}></User>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
