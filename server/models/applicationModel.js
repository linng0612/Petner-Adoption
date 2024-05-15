const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({ 
  animal: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Animal'},
  user: { type: mongoose.Schema.Types.ObjectId,  required: true , ref: 'User'},
  name:{type: String,required: true},
  address:{type: String,required: true},
  email:{type: String,required: true},
  phonenumber:{type: Number,required: true},
  message:{type: String,required: true}
},
{
    timestamps: true
}, { collection: 'applications' });

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;


