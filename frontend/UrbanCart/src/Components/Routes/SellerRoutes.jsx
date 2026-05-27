import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../user/Home'
import SellerLogin from '../Seller/SellerLogin';
import CreateProduct from '../Seller/CreateProduct';
import UpdateProduct from '../Seller/UpdateProduct';

function SellerRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sellerlogin' element={<SellerLogin/>}/>
            <Route path='/add' element={<CreateProduct/>}/>
            <Route path='/update' element={<UpdateProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default SellerRoutes
