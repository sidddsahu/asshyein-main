// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // localStorage se token check karo
  const isAuthenticated = localStorage.getItem('token');

  // agar token hai to Outlet (child routes) show karo, warna login page pe redirect karo
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
