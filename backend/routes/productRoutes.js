const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productController')
/**
 * @desc    GET all products from db
 * @route   GET /api/products
 * @access  Public
 * CAMBIAR RUTAAAAA
 */
router.get('/', getAllProducts);

/**
 * @desc    GET all products from db
 * @route   GET /api/products/:id
 * @access  Public
 * CAMBIAR RUTAAAA
 */
 router.get('/:id', getProductById);

module.exports = router;