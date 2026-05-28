const AppError=require('../utils/AppError');

const handleDuplicateErrorDb=(err)=>{
    const error=Object.values(err.keyValue).join(",");
    const message=`duplicate value here ${error}! please enter different value`;
    return new AppError(message,409);
}

const handleCastError=(error)=>{
    const message=`Invalid path ${error.path} and value ${error.value}`;
    return new AppError(message,400);
}
const handleValidationError=(error)=>{
    let valError=Object.values(error.errors).map(e=>e.message);
    const message=`Invalid Data ${valError.join(", ")}`;
    //console.log(error);
    return new AppError(message,400);
}

const sendDevError=(res,err)=>{
    return res.status(err.statusCode).json({
        status:err.status,
        error:err,
        message:err.message,
        stack:err.stack
    });
}
const sendProdError=(res,err)=>{
    if(err.isOperational)
    {
         res.status(err.statusCode).json({
            status:err.status,
            message:err.message,
        })
    }
    else{
         res.status(500).json({
            status:"internal server error",
            message:"Something went wrong"
        })
    }
};

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    err.status=err.status||"error";
    if(process.env.NODE_ENV==='development')
    {
        sendDevError(res,err);
    }
    else if(process.env.NODE_ENV==='production')
    {
        let error={...err};
        error.message=err.message;
        error.name=err.name;
        error.stack=err.stack;
        error.isOperational=true;
        if(error.name=='CastError') error=handleCastError(error);
        if(error.name=='ValidationError') error=handleValidationError(error);
        if(error.code==11000) error=handleDuplicateErrorDb(error);
        sendProdError(res,error);
    }
};