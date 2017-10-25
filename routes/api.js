const express = require('express');
const router = express.Router(); // eslint-disable-line

/* GET products listing. */
router.get('/product', (req, res) => {
  res
    .status(200)
    .send({products: []});
});

/* GET product by id. */
router.get('/product/:productId', (req, res) => {
  res
    .status(200)
    .send({message: 'hola mundo'});
});

/* POST add product to list */
router.post('/product', (req, res) => {
  console.log(req.body);
  res
    .status(200)
    .send({message: 'El producto se ha recibido'});
});

/* PUT change product by id. */
router.put('/product/:productId', (req, res) => {
  res
    .status(200)
    .send({message: 'hola mundo'});
});

router.delete('/product/:productId', (req, res) => {
  res
    .status(200)
    .send({message: 'hola mundo'});
});

module.exports = router;
