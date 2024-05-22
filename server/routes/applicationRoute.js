const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

router.post('/', applicationController.createApplication);
router.get('/', applicationController.getApplication);

module.exports = router;