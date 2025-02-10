import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
