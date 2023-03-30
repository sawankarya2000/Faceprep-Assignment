import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
