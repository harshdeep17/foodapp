const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: [{ type: String, required: true }],
  available: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (value) {
        return typeof value === "boolean";
      },
      message: 'The "Available" field must be a boolean value.',
    },
  },
});

const Food = mongoose.model("Food", foodSchema, "food");

module.exports = Food;
