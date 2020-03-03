const Shoe = require('../models/shoe');


module.exports = {
    index,
    new: newShoe,
    show,
    create
};

function index(req, res, next) {
   Shoe.find({}, function(err, shoes){
       res.render('shoes/index', {title: 'All Shoes', shoes, user: req.user});
   }); 
}

function newShoe(req, res) {
    res.render('shoes/new', { title: 'Add Shoe', user: req.user});
}

function show(req, res) {
    Shoe.findById(req.params.id, function(err, shoe) {
        res.render('shoes/show', {shoe, user: req.user})
    });
}

function create(req, res) {
    const Shoe = new Shoe(req.body);
    shoe.user = req.user._id;
    shoe.save(function(err) {
        if(err) {
            console.log(err)
            res.redirect('/shoes/new')
        } else {
            res.redirect('/shoes')
        }
    })
}
    