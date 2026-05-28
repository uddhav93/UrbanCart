const User = require("../models/userModels");
const AppError = require("../utils/AppError");
const catchAsync = require('../utils/catchAsync');
//const User=require('./../models/userModels');

const jwt = require('jsonwebtoken');
const { promisify } = require("node:util");

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

const createSignToken = (user, statusCode, res) => {

    const token = signToken(user._id);
    const cookieOptions = {
        maxAge: process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
    if (process.env.NODE_ENV === 'production') {
        cookieOptions.secure = true;
    }
    res.cookie("jwt", token, cookieOptions);
    user.password = undefined;
    res.status(statusCode).json({
        status: "success",
        data: user,
        token
    })
}

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    createSignToken(newUser, 201, res)
});


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !await user.checkPwd(password, user.password)) {
        return next(new AppError('Invalid email of password', 400))
    }

    createSignToken(user, 200, res)
});


exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    next();
    if (!token) {
        return next(new AppError('you are not logged in please log in!', 401))
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(
            new AppError('user you try to search does not exists', 401)
        )
    }

})

exports.restrictedTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            const message = `you are not allowed to modify the product data`
            return next(new AppError(message, 403))
        }
        next()
    }
}