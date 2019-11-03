var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
  var product = Product.find();
  res.render('shop/index', {
    title: 'Car Rental',
    products: products
  });
});

module.exports = router;