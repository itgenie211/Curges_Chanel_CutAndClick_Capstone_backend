const Hairstyle = require('../models/hairstyleModel');
const Product = require('../models/productModel');

module.exports = {
    getHairstyleCategories: async (req, res) => {
        try {
            const categories = await Hairstyle.distinct('category');
            res.json(categories);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getProductCategories: async (req, res) => {
        try {
            const categories = await Product.distinct('category');
            res.json(categories);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};