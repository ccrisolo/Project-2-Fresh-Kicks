const router = require('express').Router();
const shoesCtrl = require('../controllers/shoes')


router.get('/shoes', shoesCtrl.index)

module.exports = router;