const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// GET search for hairstyles
router.get('/hairstyles', searchController.searchHairstyles);

// GET search for products
router.get('/products', searchController.searchProducts);

module.exports = router;