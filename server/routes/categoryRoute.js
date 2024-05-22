const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.post('/create', categoryController.createCategory);
router.get('/', categoryController.getCategory);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;