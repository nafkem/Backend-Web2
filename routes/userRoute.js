// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/contact', formController.submitContactForm);
router.post('/register', formController.registerUser);

module.exports = router;