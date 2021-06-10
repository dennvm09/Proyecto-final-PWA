const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");


exports.register = async(req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, 
            email,
            password,
        });

        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        next(error);        
    };
    
};

exports.login = async(req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password is provided
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));     
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            // res.status(401).json({success: false, error: "Invalid credentials" });
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            // res.status(401).json({success: false, error: "Invalid credentials" });      
            return next(new ErrorResponse("Invalid credentials", 401));      
        }
        res.status(200).json({
            success: true,
            token: "ifiuwhgood4u",
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password route");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password route");
};
