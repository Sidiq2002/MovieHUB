// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// export const ProtectedRoutes = () => {
//   const auth = localStorage.getItem("loggin");
//   return auth ? <Outlet /> : <Navigate to={"/register"} />;
// };


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("loggin");
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
