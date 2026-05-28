const {Scheme,model, Schema}=require('mongoose');
const validator=require("validator");
const { validate } = require('./productModels');
const bcrypt=require("bcrypt")

const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"Email is mandetory"],
        trim:true        
    },
    lastName:{
        type:String,
        required:[true,"Email is mandetory"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is mandetory"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,"password is mandetory"],
        trim:true,
        minLength:[6,'password shoul be 6 or more than 6 characters'],
        select:false,
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function(val){
                return val==this.password
            },
            message:"password and confirmPassword both are not same"
        }
    },
    role:{
        type:String,
        enum:["user","admin","seller"]
    }
})

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password=await bcrypt.hash(this.password,12);
    this.confirmPassword=undefined;
})
userSchema.methods.checkPwd=async function(rawPwd,hashedPwd){
    return await bcrypt.compare(rawPwd,hashedPwd);
}

const User=model("User",userSchema);
module.exports=User;