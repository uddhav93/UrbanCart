const Product = require('./../models/productModels');
const catchAsync=require('../utils/catchAsync');
exports.getProducts = catchAsync(async (req, res) => {
    
        const products=await Product.find();
        res.status(200).json({
            status: 'success',
            count:products.length,
            data:products
        })
    });
exports.singleProduct = catchAsync(async(req, res) => {    
        //console.log(req.params);
        //const product=await Product.findOne({_id:req.params.id});
        const product=await Product.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data:product
        })
    });
exports.createProduct = catchAsync(async (req, res) => {

        let product=await Product.create(req.body);
        res.status(201).json({
            status: 'success',
            data:product
        })
    });

exports.updateProduct = catchAsync(async (req, res) => {
        //console.log(req.params);
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{
            //new:true
            returnDocument:'after'
        });
        res.status(200).json({
            status: 'success',
            data:updatedProduct
        })
    }); 
exports.removeProduct = catchAsync(async(req, res) => {

        let id=req.params.id;
        let deleteProduct=await Product.deleteOne({_id:id})
            res.status(200).json({
                status: 'success',
                message: "product deleted successfully"
            }) 
    })
