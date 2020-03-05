const router = require('express').Router();
const shoesCtrl = require('../controllers/shoes')
const reviewsCtrl = require('../controllers/reviews');


router.get('/', shoesCtrl.index);
router.get('/new', shoesCtrl.new);
router.get('/:id', shoesCtrl.show);
router.post('/new', shoesCtrl.create);
router.post('/:id/update', shoesCtrl.edit)
router.post('/:id/reviews', reviewsCtrl.create);
router.delete('/:id', shoesCtrl.delete);

module.exports = router;