const Application = require('../models/applicationModel');
const createError = require('../utils/appError');

// Fill in the adoption form
exports.createApplication = async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 
            'Congratulations, your application has been successfully submitted! We will contact you soon.',
            application: {
                _id: newApplication._id,
                animalId: newApplication.animal,
                userId: newApplication.user,
                name: newApplication.name,
                address: newApplication.address,
                email: newApplication.email,
                phonenumber: newApplication.phonenumber,
                message: newApplication.message,
            }
        });
    } catch (error) {
        next(error);
    }
};

// Get a list of adoption applications
exports.getApplication = async (req, res, next) => {
    try {
        const applications = await Application.find();
        res.status(200).json({
            status: 'Successfully loaded all applications!',
            data: {
                applications
            }
        });
    } catch (error) {
        next(error);
    }
};

