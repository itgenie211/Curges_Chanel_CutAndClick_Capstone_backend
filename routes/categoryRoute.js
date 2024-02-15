const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');

// GET all hairstyle categories
router.get('/hairstyles', categoryController.getHairstyleCategories);

// GET all product categories
router.get('/products', categoryController.getProductCategories);

module.exports = router;