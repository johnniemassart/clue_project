import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const authToken = { token: true };
  return authToken.token ? <Outlet /> : <Navigate to="/welcome" />;
};

export default PrivateRoutes;
