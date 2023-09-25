const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, require: true, unique: true },
  description: String,
  price: { type: Number, min: [0, "Wrong Price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [50, "Wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
  },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
