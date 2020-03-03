const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {type: String},
    rating: {type: Boolean, default: true}
}, {
  timestamps: true
});

const shoeSchema = new Schema({
    brand: {type: String},
    model: {type: String}, 
    retailPrice: {type: Number},
    resalePrice: {type: Number},
    reviews: [reviewSchema],
    googleId: String,
    photos: {type: String}//use URL address to upload 
}, {
  timestamps: true
});


module.exports = mongoose.model('Shoe', shoeSchema);

