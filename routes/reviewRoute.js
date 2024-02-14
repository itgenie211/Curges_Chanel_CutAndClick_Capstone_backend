const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST add a review for a hairstyle
router.post('/hairstyles/:id/reviews', reviewController.addHairstyleReview);

// POST add a review for a product
router.post('/products/:id/reviews', reviewController.addProductReview);

module.exports = router;