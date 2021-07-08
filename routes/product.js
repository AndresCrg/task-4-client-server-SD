const { Router } = require('express');
const { productPOST } = require('../controllers/product');

const router = Router();

router.post('/products', productPOST);

module.exports = router;