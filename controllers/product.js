const Product = require('../models/products');

/* ==================================
 * GET product by id
 * ================================== */

const getProduct = (req, res) => {
  const {productId} = req.params;

  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send({
        message: 'Error al realizar la petición'
      });
    }

    if (!product) {
      res.status(404).send({
        message: 'El producto no existe'
      });
    }

    res.status(200).send({product});
  });
};

/* ==================================
 * GET products listing.
 * ================================== */

const getProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send({
        message: 'Error al realizar la petición'
      });
    }

    if (!products) {
      res.status(404).send({
        message: 'No hay productos'
      });
    }

    res.status(200).send({products});
  });
};

/* ==================================
 * POST product to list
 * ================================== */

const saveProduct = (req, res) => {
  const {name, picture, price, category, description} = req.body;
  const product = new Product({
    name,
    picture,
    price,
    category,
    description
  });

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar el producto'
      });
    }

    res.status(200).send({product: productStored});
  });
};

/* ==================================
 * PUT modified product by id
 * ================================== */

const updateProduct = (req, res) => {
  const {productId} = req.params;
  const update = req.body;

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) {
      res.status(500).send({
        message: 'Error al modificar el producto'
      });
    }

    res.status(200).send({product: productUpdated});
  });
};

/* ==================================
 * DELETE product by id
 * ================================== */

const deleteProduct = (req, res) => {
  const {productId} = req.params;

  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send({
        message: 'Error al borrar el producto'
      });
    }

    product.remove(err => {
      if (err) {
        res.status(500).send({
          message: 'Error al borrar el producto'
        });
      }

      res.status(200).send({
        message: 'El producto ha sido eliminado'
      });
    });
  });
};

module.exports = {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct
};
