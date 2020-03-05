const Shoe = require('../models/shoe');

module.exports = {
    create,
};

function create (req, res) {
    Shoe.findById(req.params.id, function(err, shoe) {
        shoe.reviews.push(req.body);
        shoe.save(function(err) {
            console.log('Review has been created!')
            res.redirect('/shoes');
        });
    });
}