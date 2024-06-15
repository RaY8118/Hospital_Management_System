import { catchAsyncErros } from "../middlewares/catchAsyncErros.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";


export const patientRegister = catchAsyncErros(async (req, res, next) => {
    const { firstName, lastName, email, phone, password, gender, dob, ano, role } = req.body;
    if (!firstName || !lastName || !email || !phone || !password || !gender || !dob || !ano || !role) {
        return next(new ErrorHandler("Please fill full form!", 400));
    }
    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User already registered!!", 400));
    }
    user = await User.create({ firstName, lastName, email, phone, password, gender, dob, ano, role })
    res.status(200).json({
        success: true,
        message: "user registered"
    })
})