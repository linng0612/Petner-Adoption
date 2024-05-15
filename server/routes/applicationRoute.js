const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

// POST a new application
router.post('/', applicationController.createApplication);

// GET all applications on screen
router.get('/', applicationController.getApplication);



module.exports = router;