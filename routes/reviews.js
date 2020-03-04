const router = require('express').Router();
const passport = require('passport');
const reviewsCtrl = require('../controllers/reviews');

router.post('/shoes/:id/reviews', reviewsCtrl.create);

module.exports = router;