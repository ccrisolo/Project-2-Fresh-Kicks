const Shoe = require('../models/shoe');


module.exports = {
    index,
    new: newShoe,
    show,
    create,
    delete: deleteShoe,
    edit

};

function deleteShoe(req, res) {
    console.log("SHOE ID: ")
    Shoe.findByIdAndDelete(req.params.id, function(err, deletedShoe){
        console.log("DELETED SHOE: ", deletedShoe  )
        res.redirect('/shoes');
    });
}

function index(req, res, next) {
   Shoe.find({}, function(err, shoes){
       console.log(shoes)
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
    const shoe = new Shoe(req.body);
    console.log(req.body)
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

function edit(req, res) {
    Shoe.findByIdAndUpdate(req.params.id, req.body, function(err, edit) {
        //verifies that shoe is owned by user
        console.log("edit shoe: ", edit)
        res.redirect('/shoes');
    });
}
    