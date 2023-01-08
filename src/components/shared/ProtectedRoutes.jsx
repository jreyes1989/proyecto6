import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    if (localStorage.getItem("token")) {
        // Estoy Logeado
        return  <Outlet />

    } else {
        //NO estoy logiado
        return <Navigate to= "/login" />
    }
}

export default ProtectedRoutes