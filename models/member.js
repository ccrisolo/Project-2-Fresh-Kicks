var mongoose = require('mongoose');



const memberSchema = new mongoose.Schema ({
    name: String,
    email: String,
    googleId: String,
});

module.exports = mongoose.model('Member', memberSchema);