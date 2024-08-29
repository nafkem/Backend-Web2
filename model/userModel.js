// models/Form.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    howWouldYouLikeToAssist: { type: String, required: true },
    description: { type: String, required: true }
});

const registrationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    areaOfInterest: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = { Contact, Registration };