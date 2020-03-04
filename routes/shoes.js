const router = require('express').Router();
const shoesCtrl = require('../controllers/shoes')


router.get('/', shoesCtrl.index);
router.get('/new', shoesCtrl.new);
router.get('/:id', shoesCtrl.show);
router.post('/new', shoesCtrl.create);
router.post('/:id/update', shoesCtrl.edit)
// router.put('/shoes/shoe._id', shoesCtrl.edit);
router.delete('/:id', shoesCtrl.delete);

module.exports = router;