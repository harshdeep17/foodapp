const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password must have at least 4 characters'],
    },
    address: {
        type: String,
        trim: true,
    },
    profile_path: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
