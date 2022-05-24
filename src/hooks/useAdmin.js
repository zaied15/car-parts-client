import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [loadAdmin, setLoadAdmin] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setAdmin(res.data.admin);
        setLoadAdmin(false);
      });
  }, [user]);
  return [admin, loadAdmin];
};
export default useAdmin;
