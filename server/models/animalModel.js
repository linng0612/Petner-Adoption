const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category'},
  breed: { type: String, required: true },
  age: { type: Number, default: 0 },
  sex: { type: String, enum: ['Male','Female'],required: true },
  size:{type: String,enum: ['Small','Average','Big'],required: true}, 
  description: { type: String, required: true },
} ,
{
    timestamps: true
},{ collection: 'animals' });

const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal;


