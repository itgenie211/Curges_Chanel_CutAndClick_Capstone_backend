const Hairstyle = require('../models/hairstyleModel');

module.exports = {
    getAllHairstyles: async (req, res) => {
        try {
            const hairstyles = await Hairstyle.find();
            res.json(hairstyles);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getHairstyleById: async (req, res) => {
        try {
            const hairstyle = await Hairstyle.findById(req.params.id);
            if (!hairstyle) {
                return res.status(404).json({ message: 'Hairstyle not found' });
            }
            res.json(hairstyle);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteHairstyle: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedHairstyle = await Hairstyle.findByIdAndDelete(id);
            if (!deletedHairstyle) {
                return res.status(404).json({ message: 'Hairstyle not found' });
            }
            res.json({ message: 'Hairstyle deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};