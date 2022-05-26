import axios from "axios";
import React from "react";

const User = ({ user, index, refetch }) => {
  const { name, email, role } = user;
  const makeAdmin = (email) => {
    axios({
      method: "PATCH",
      url: `https://pitstop-parts-server.herokuapp.com/admin/${email}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      refetch();
      console.log(res);
    });
  };
  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{email}</td>
      <td className="font-bold">{role ? "Admin" : "Subscriber"}</td>
      <td>
        {!role && (
          <button onClick={() => makeAdmin(email)} className="btn btn-danger">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default User;
