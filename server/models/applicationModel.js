const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({ 
  name:{type: String,required: true},
  phonenumber:{type: Number,required: true},
  email:{type: String,required: true},
  age:{type: Number,required: true},
  career:{type: String,required: true},
  family_members:{type: String,required: true},
  address:{type: String,required: true},
  resident_form:{type: String,required: true},
  square_meter:{type: String,required: true},
  other_pets:{type: String,required: true},
  experience:{type: String,required: true},
  caring_opinion:{type: String,required: true},
  pet_expection:{type: String,required: true},
  future_provision:{type: String,required: true},
  caring_responsibility:{type: String,required: true},
  time_moving:{type: String,required: true},
  message:{type: String,required: true},
  animal: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Animal'},
  user: { type: mongoose.Schema.Types.ObjectId,  required: true , ref: 'User'},
},
{
    timestamps: true
}, { collection: 'applications' });

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;


