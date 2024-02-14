const Hairstyle = require('../models/hairstyleModel');
const Product = require('../models/productModel');

module.exports = {
    addHairstyleReview: async (req, res) => {
        try {
            const { id } = req.params;
            const hairstyle = await Hairstyle.findById(id);
            if (!hairstyle) {
                return res.status(404).json({ message: 'Hairstyle not found' });
            }

            const { rating, comment } = req.body;
            const review = { rating, comment };
            hairstyle.reviews.push(review);
            await hairstyle.save();

            res.status(201).json(hairstyle.reviews);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    addProductReview: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const { rating, comment } = req.body;
            const review = { rating, comment };
            product.reviews.push(review);
            await product.save();

            res.status(201).json(product.reviews);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};