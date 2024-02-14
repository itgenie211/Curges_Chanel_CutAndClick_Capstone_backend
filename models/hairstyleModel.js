const mongoose = require('mongoose');

const hairstyleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: [{
        rating: Number,
        comment: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

const Hairstyle = mongoose.model('Hairstyle', hairstyleSchema);

module.exports = Hairstyle;