const express=require('express');
const morgan=require('morgan');
const cors=require("cors")

const AppError=require('./utils/AppError');
const globalError=require('./middleware/globalError')
const productRouter=require('./routes/productRoute');
const userRouter=require('./routes/userRoute');

const app=express()

app.use(cors())
app.use(express.urlencoded())//parse form data
app.use(express.json())//for json

if(process.env.NODE_ENV==='development')
{
    app.use(morgan("dev"));
}


//base url
// app.use((req,res,next)=>{
//     console.log("this is a custom middleware");
//     next()
// })
app.use('/api/v1/products',productRouter);
app.use('/api/v1/users',userRouter);


app.use(`/{*any}/`,(req,res,next)=>{
    // res.status(404).json({
    //     status:'fail',
    //     message:`cannot find the path ${req.originalUrl}`
    // })
    // const err=new Error(`cannot find the path ${req.originalUrl}`)
    // err.status='fail';
    // err.statusCode=404;
    next(new AppError(`cannot find the path ${req.originalUrl}`,404))
})
app.use(globalError);
module.exports=app;