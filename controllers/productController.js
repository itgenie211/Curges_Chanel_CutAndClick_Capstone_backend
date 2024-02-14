const Product = require('../models/productModel');

//Controller methods for product handling
module.exports = {
    getAllProducts: async(req,res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    },

    getProductById: async (req, res) => {
        try {
            const products = await Product.findById(req.params.id);
            if (products) {
                res.json(products)
            } else {
                res.status(404).json({message: 'Product not found'});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    },

    createProduct: async (res, res) => {
        const Product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });

        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product == null) {
                return res.status(404).json({message: 'Product not found'});
            }

            if (req.body.name != null) {
                product.name = req.body.name;
            } 
            if (req.body.price != null) {
                product.price = req.body.price;
            }
            if (req.body.description != null) {
                product.description = req.body.description;
            }
                
            const updatedProduct = await product.save();
                response.json(updatedProduct);
            } catch (err) {
                return res.status(400).json({message: err.message});
            }
        },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product == null) {
                return res.status(404).json({message: 'Product not found'});
            }
            await product.remove();
            res.json({message: 'Product deleted'});
            } catch (err) {
                return res.status(500).json({message: err.message});
            }
        }
    };
