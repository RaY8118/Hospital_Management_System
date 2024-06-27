import { catchAsyncErros } from "../middlewares/catchAsyncErros.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Pres } from "../models/presSchema.js";

export const getPres = catchAsyncErros(async (req, res, next) => {
    const pres = await Pres.find({});
    res.status(200).json({
        success: true,
        message: "Retrieved Prescription Data",
        pres,
    });
});

export const getUserPres = catchAsyncErros(async (req, res, next) => {
    const { _id } = req.user;
    const pres = await Pres.find({ patientId: _id });
    res.status(200).json({
        success: true,
        message: "Retrieved Prescription Data",
        pres,
    });
});

export const postPres = catchAsyncErros(async (req, res, next) => {
    const {
        firstName,
        lastName,
        phone,
        ano,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstname,
        doctor_lastname,
        doctorId,
        patientId,
        address,
        status,
        disease,
        bp,
        weight,
        meds,
        days,
    } = req.body;

    // Validate required fields
    if (
        !firstName ||
        !lastName ||
        !phone ||
        !ano ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstname ||
        !doctor_lastname ||
        !doctorId ||
        !patientId ||
        !address ||
        !status ||
        !disease ||
        !bp ||
        !weight ||
        !meds ||
        !days
    ) {
        return next(new ErrorHandler("Please fill in all fields", 400));
    }

    // Create prescription data
    const presData = {
        firstName,
        lastName,
        phone,
        ano,
        dob,
        gender,
        appointment_date,
        department,
        doctor: { firstName: doctor_firstname, lastName: doctor_lastname },
        doctorId,
        patientId,
        address,
        status,
        disease,
        bp,
        weight,
        meds,
        days
    };

    try {
        // Save to database
        const pres = await Pres.create(presData);

        // Send response
        res.status(201).json({
            success: true,
            data: pres,
        });
    } catch (error) {
        console.error("Error saving prescription:", error);
        return next(new ErrorHandler("Error saving prescription", 500));
    }
});
