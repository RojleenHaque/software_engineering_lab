const mongoose = require('mongoose');

// // Review Schema
// const reviewSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     rating: { type: String, required: true },
//     comment: { type: String, required: true },
//     user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
// });

// Product Schema
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },  // Fixed typo from `ttpe` to `type`
    discount_price: { type: Number, required: true, default: 0 },  // Fixed typo from `ttpe` to `type`
   // reviews: [reviewSchema]  // Embedded review schema
});

// Export the Product model
module.exports = mongoose.model("Product", productSchema);
