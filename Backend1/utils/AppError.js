class AppError extends Error{
    constructor(message,statusCode)
    {
        super(message);
        this.status=`${statusCode}`.startsWith("4")?'Fail':'Internal server error';
        this.statusCode=statusCode||500;
        this.isOperational=true;
        Error.captureStackTrace(this,constructor);
    }
}
module.exports=AppError;