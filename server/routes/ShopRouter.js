const ShopController = require('../controllers/ShopController');
const SharedController = require('../controllers/SharedController');
const router = require('express').Router();

router.get('/', ShopController.index);

router.get('/:id', ShopController.findById);

module.exports = router;