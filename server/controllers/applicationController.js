const Application = require('../models/applicationModel');
const createError = require('../utils/appError');

exports.createApplication = async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 
            'Congratulations, your application has been successfully submitted! We will contact you soon.',
            application: {
                _id: newApplication._id,
                name: newApplication.name,
                phonenumber: newApplication.phonenumber,
                email: newApplication.email,
                age: newApplication.age,
                career: newApplication.career,
                family_members: newApplication.family_members,
                address: newApplication.address,
                resident_form: newApplication.resident_form,
                square_meter: newApplication.square_meter,
                other_pets: newApplication.other_pets,
                experience: newApplication.experience,
                caring_opinion: newApplication.caring_opinion,
                pet_expection: newApplication.pet_expection,
                future_provision: newApplication.future_provision,
                caring_responsibility: newApplication.caring_responsibility,
                time_moving: newApplication.time_moving, 
                message: newApplication.message,
                animalId: newApplication.animal,
                userId: newApplication.user,
            }
        });
    } catch (error) {
        next(error);
    }
};

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

