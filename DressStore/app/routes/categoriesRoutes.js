const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/api/categories', categoriesController.getAllCategories);
router.get('/api/categories/:id', categoriesController.getCategoryById);
router.post('/api/categories', categoriesController.createCategory);
router.put('/api/categories/:id', categoriesController.updateCategory);
router.delete('/api/categories/:id', categoriesController.deleteCategory);

module.exports = router;
