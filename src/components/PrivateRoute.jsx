import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading user data...</p>;
  return <>{user ? <Outlet /> : <Navigate to="login" />}</>;
};

export default PrivateRoute;
