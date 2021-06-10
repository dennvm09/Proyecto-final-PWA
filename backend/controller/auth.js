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

        sendToken(user, 201, res);
        
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
        sendToken(user, 201, res);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password route");

//     // Send Email to email provided but first check if user exists
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return next(new ErrorResponse("No email could not be sent", 404));
//     }
//     // Reset Token Gen and add to database hashed (private) version of token
//     const resetToken = user.getResetPasswordToken();
//     await user.save();

//     // Create reset url to email to provided email
//     const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
//     // HTML Message
//     const message = `
//       <h1>You have requested a password reset</h1>
//       <p>Please make a put request to the following link:</p>
//       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;
//     }catch (error){

//     }
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token });
};
