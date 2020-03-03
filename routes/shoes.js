const router = require('express').Router();
const shoesCtrl = require('../controllers/shoes')


router.get('/', shoesCtrl.index);
router.get('/new', shoesCtrl.new);
router.get('/:id', shoesCtrl.show);
router.post('/new', shoesCtrl.create)
router.delete('/:id', shoesCtrl.delete);

module.exports = router;