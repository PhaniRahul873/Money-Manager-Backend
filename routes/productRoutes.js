const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:date', productController.getProductByDate);
router.put('/products/:date', productController.updateProductByDate);
router.delete('/products/:date', productController.deleteProductByDate);

module.exports = router;
