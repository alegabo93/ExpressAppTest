const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({ // eslint-disable-line
  name: String,
  picture: String,
  description: String,
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['computers', 'phones', 'accesories']
  }
});

module.exports = mongoose.model('Product', ProductSchema);
