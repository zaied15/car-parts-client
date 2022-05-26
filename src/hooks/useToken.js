import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.email;
    const name = user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`https://pitstop-parts-server.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
          setToken(data.token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
