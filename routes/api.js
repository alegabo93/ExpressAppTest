const express = require('express');
const router = express.Router(); // eslint-disable-line

const Product = require('../models/products');

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
  console.log('POST api/product', req.body);

  const product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productStored) => {
    if (err) {
      res
        .status(500)
        .send({message: 'Error al guardar el producto'});
    }

    res
      .status(200)
      .send({product: productStored});
  });
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
