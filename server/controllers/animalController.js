const Animal = require('../models/animalModel.js');
const createError = require('../utils/appError');

// Get all animals
exports.getallAnimal = async (req, res, next) => {
    try {
        const animals = await Animal.find();

        if (!animals || animals.length === 0) {
            return next(new createError('No animals found', 404));
        }
        res.status(200).json({
            status: 'success',
            animals: animals
        });
    } catch (error) {
        next(error);
    }
};




// Get a single animal by id
exports.getAnimalById = async (req, res, next) => {
    try {
        
        const animal = await Animal.findById(req.params.id);

        if (!animal) {
            return next(createError(404, 'Animal not found'));
        }
        res.status(200).json({
            status: 'success',
            animal: animal
        });
    } catch (error) {
        next(error);
    }
};

// Create a new animal
exports.createAnimal = async (req, res, next) => {
    try {
        const newAnimal = await Animal.create(req.body);
        res.status(201).json({
            status: 'Created new animal information successfully',
            animal: {
                _id: newAnimal._id,
                name: newAnimal.name,
                category: newAnimal.category,
                breed: newAnimal.breed,
                age: newAnimal.age,
                sex: newAnimal.sex,
                size: newAnimal.size,
                description: newAnimal.description
            }
        });
    } catch (error) {
        next(error);
    }
};

// Controller function to update an existing animal
exports.updateAnimal = async (req, res, next) => {
    try {
        
        const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedAnimal) {
            return next(new createError('Animal not found', 404));
        }
        res.status(200).json({
            status: 'success',
            data: {
                animal: updatedAnimal
            }
        });
    } catch (error) {
        next(error);
    }
};


// Controller function to delete an animal

exports.deleteAnimal = async (req, res, next) => {
    try {
        const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
        if (!deletedAnimal) {
            return next(new createError('Animal not found', 404));
        }
        res.status(200).json({
            status: 'success',
            message: 'Animal deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};




