const express=require('express')
const router=express.Router();
const {protect,restrictedTo}=require('./../controller/authController')
const {getProducts,singleProduct,createProduct,updateProduct,removeProduct}=require('../controller/productController');
const AppError = require('../utils/AppError');
//route chaining using endpoints


router.route('/').get(getProducts).post(protect,restrictedTo("admin","seller"),createProduct)

router.route('/:id').get(singleProduct).patch(updateProduct).delete(removeProduct)
module.exports=router;