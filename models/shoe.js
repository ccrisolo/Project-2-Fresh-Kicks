const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    reviews: String
}, {
  timestamps: true
});

const shoeSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "Member"},
    brand: {type: String},
    model: {type: String}, 
    retailPrice: {type: Number},
    resalePrice: {type: Number},
    reviews: [reviewSchema],
    googleId: String,
    photo: {type: String}//use URL address to upload 
}, {
  timestamps: true
});


module.exports = mongoose.model('Shoe', shoeSchema);

