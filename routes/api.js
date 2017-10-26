const express = require('express');
const router = express.Router(); // eslint-disable-line

const productControllers = require('../controllers/product');

/* ==================================
 * Product Schema requests
 * ================================== */

router.get('/product', productControllers.getProducts);
router.get('/product/:productId', productControllers.getProduct);
router.post('/product', productControllers.saveProduct);
router.put('/product/:productId', productControllers.updateProduct);
router.delete('/product/:productId', productControllers.deleteProduct);

module.exports = router;
