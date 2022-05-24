import React from "react";

const User = ({ user, index }) => {
  const { name, email, role } = user;
  const makeAdmin = (email) => {};
  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{name}</td>
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
