const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const createError = require('../utils/appError');

dotenv.config();

exports.register = async (req, res, next) => {
    try{
        const user= await User.findOne({email:req.body.email});
        if(user){
            return next(new createError('User already exists', 400));
        }
        const newUser = await User.create(req.body);

        const token = jwt.sign(
            {id: newUser._id}, 
            process.env.tokenSecret, {expiresIn: '30d'});
        
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            },
        });
    } catch(error){
        next(error);
    };
}


exports.login = async (req, res, next) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if (!user) return next(new createError('User not found', 404));

        const isPasswordValid = await user.matchPassword(password);

        if (!isPasswordValid) {
            return next(new createError('Invalid email or password', 401))
        };

        const token = jwt.sign({id: user._id}, process.env.tokenSecret, {expiresIn: '30d'});
       
        res.status(200).json({
            status: 'success',
            message: 'Logged in successfully',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            },
        });
    }catch(error){
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(new createError('User not found', 404));
        }
        res.status(200).json({
            status: 'success',
            user,
        });

    }catch(error){
        next(error);
    }
};


exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find({});
        if (!users || users.length === 0) {
            return next(new createError('No user found', 404));
        }
        res.status(200).json({
            status: 'success',
            users:users
        });

    }catch(error){
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        }); 
        if (!updatedUser) {
            return next(new createError('User not found', 404));
        }
        res.status(200).json({
            status: 'success',
            user:updatedUser
        });

    }
    catch(error){
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id); 
        if (!deletedUser) {
            return next(new createError('User not found', 404));
        }  
        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
        });
        
    }   
    catch(error){
        next(error);
    }

}