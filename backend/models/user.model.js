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
<<<<<<< HEAD
                const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
=======
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
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
<<<<<<< HEAD
    address: [{
        type: String,
        trim: true,
    }],
    profile_path: {
        type: String,
=======
    address: {
        type: String,
        trim: true,
    },
    profile_path: {
        type: Array,
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
<<<<<<< HEAD
    isVerified: {
        type: Boolean,
        default: false,
    },
    otpSecret: String,
=======
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
});

const User = mongoose.model('User', userSchema, 'users');

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
