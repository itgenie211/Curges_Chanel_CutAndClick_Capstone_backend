const Hairstyle = require('../models/hairstyleModel');
const Product = require('../models/productModel');

module.exports = {
    searchHairstyles: async (req, res) => {
        try {
            const { query } = req.query;
            const hairstyles = await Hairstyle.find({ $text: { $search: query } });
            res.json(hairstyles);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    searchProducts: async (req, res) => {
        try {
            const { query } = req.query;
            const products = await Product.find({ $text: { $search: query } });
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};