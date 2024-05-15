const express = require('express');
const animalController = require('../controllers/animalController');
const router = express.Router();


router.get('/', animalController.getallAnimal);
router.get('/:id', animalController.getAnimalById);
router.post('/animals', animalController.createAnimal);
router.put('/animals/:id',  animalController.updateAnimal);
router.delete('/animals/:id',  animalController.deleteAnimal);
module.exports = router;
