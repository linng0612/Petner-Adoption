const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category:{type: String, required: true, ref: 'Category'},
  age: { type: Number, default: 0 },
  gender: { type: String, enum: ['Male','Female'],required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
} ,
{
    timestamps: true
},{ collection: 'animals' });

const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal;


