import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import User from "./User";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
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
      <h3 className="text-2xl font-bold text-primary">ALL USERS</h3>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></User>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
