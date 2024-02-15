const express = require('express');
const router = express.Router();
const hairstyleController = require('../controllers/hairstylesController');

// GET all hairstyles
router.get('/', hairstyleController.getAllHairstyles);

// GET a specific hairstyle by ID
router.get('/:id', hairstyleController.getHairstyleById);

// DELETE delete a hairstyle by ID
router.delete('/:id', hairstyleController.deleteHairstyle);

module.exports = router;