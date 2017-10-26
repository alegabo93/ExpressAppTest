const express = require('express');
const router = express.Router(); // eslint-disable-line

const productControllers = require('../controllers/product');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');

/* ==================================
 * Product Schema requests
 * ================================== */

router.get('/product', productControllers.getProducts);
router.get('/product/:productId', productControllers.getProduct);
router.post('/product', productControllers.saveProduct);
router.put('/product/:productId', productControllers.updateProduct);
router.delete('/product/:productId', productControllers.deleteProduct);

/* ==================================
 * User Schema requests
 * ================================== */

router.post('/signup', userControllers.signUp);
router.post('/signin', userControllers.signIn);
router.get('/private', auth, (req, res) => {
  res.status(200).send({
    message: 'tienes acceso'
  });
});

module.exports = router;
