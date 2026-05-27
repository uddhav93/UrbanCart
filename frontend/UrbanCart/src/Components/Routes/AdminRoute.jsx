import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../user/Home'
import AdminLogin from '../admin/AdminLogin'

function AdminRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adminlogin' element={<AdminLogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AdminRoute
