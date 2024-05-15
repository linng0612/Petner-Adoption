
const Category = require('../models/categoryModel');
const createError = require('../utils/appError');

exports.createCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json({
            status: 'Create new category successfully!',
            category: {
                _id: newCategory._id,
                name: newCategory.name,
            }
        });
    } catch (error) {
        next(error);
    }
};  

exports.getCategory = async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json({
            status: 'Get all categories successfully!',
            categories: categories
        });
    } catch (error) {
        next(error);
    }
};

exports.getCategoryById = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return next(createError(404, 'Category not found!'));
        }

        res.status(200).json({
            status: 'Get category by id successfully!',
            category: category
        });
    } catch (error) {
        next(error);
    }
};

exports.updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body   , {

        });
        if (!updatedCategory) {
            return next(new createError('Category not found!', 404));
        }
        res.status(200).json({
            status: 'Category updated successfully!',
            data: {
                category: updatedCategory
            }
        });

    }catch (error) {
        next(error);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return next(new createError('Category not found!', 404));
        }

        res.status(204).json({
            status: 'Category deleted successfully!',
            data: null
        });
    } catch (error) {
        next(error);
    }
};