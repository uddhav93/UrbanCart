import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './../Navbar';
import Home from './../user/Home';
import Product from '../user/Product';
import Login from '../user/Login'
function UserRouter() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/userlogin' element={<Login/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default UserRouter
