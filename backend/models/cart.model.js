const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Food',
                unique: true,
            },
            quantity: {
                type: Number,
                min: 1
            }
        }
    ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
