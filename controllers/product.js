const { request, response } = require('express');
const Product = require('../models/product');

let productList = [new Product('Arroz', 3000)];

const productPOST = (req = request, res = response) => {
    const { product, price } = req.body;
    productList.push(new Product(product, price));
    console.log(price);
    res.json({
        productList,
    });
};

module.exports = {
    productPOST,
};