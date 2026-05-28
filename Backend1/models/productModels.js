    const mongoose=require('mongoose')
const productShema=new mongoose.Schema({
    pname:{
        type:String,
        required:[true,"Product name is required"],
        minLength:[4,"minimum 4 character is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    description:{
        type:String,
        required:true
    }
})

const product=mongoose.model("product",productShema);

module.exports=product;
