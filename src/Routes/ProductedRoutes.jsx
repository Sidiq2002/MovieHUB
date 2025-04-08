import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProductedRoutes = () => {
    const auth = localStorage.getItem("loggedin")
  return auth ? <Outlet />:<Navigate to={"/login"} />
}
