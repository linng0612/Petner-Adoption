const mongoose = require('mongoose');
require('dotenv').config(); 

console.log(process.env.MONGODB_URI)

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{dbName: 'Petner'})
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDatabase;



