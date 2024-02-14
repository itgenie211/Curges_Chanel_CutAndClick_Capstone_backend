const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST register a new user
router.post('/register', userController.registerUser);

// POST login a user
router.post('/login', userController.loginUser);

// GET user profile
router.get('/profile', userController.getUserProfile);

// PUT update user profile
router.put('/profile', userController.updateUserProfile);

// DELETE delete user account
router.delete('/profile', userController.deleteUser);

module.exports = router;