const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    foodItems: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Food',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    orderDate: {
        type: Date,
        required: true
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Delivered']
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
