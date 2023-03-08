const BikeController = require('../controllers/BikeController');
const SharedController = require('../controllers/SharedController');
const router = require('express').Router();

router.get('/', BikeController.index);

router.get('/:id', BikeController.findById);

module.exports = router;