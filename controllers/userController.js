const User = require('../models/userModel');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const newUser = new User({ username, email, password });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            // Implement login functionality based on your authentication mechanism
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getUserProfile: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateUserProfile: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            await user.save();
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            await user.remove();
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};