const mongoose = require('mongoose');

const OtpTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otpCode: {
    type: Number,    
  },
  expiresIn:{
    type: Number
  }
});

module.exports = OtpToken = mongoose.model('otptoken', OtpTokenSchema);