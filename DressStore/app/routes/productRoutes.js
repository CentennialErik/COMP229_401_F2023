const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getProductById);
router.post('/api/products', productController.createProduct);
router.put('/api/products/:id', productController.updateProduct);
router.delete('/api/products/:id', productController.deleteProduct);

module.exports = router;
