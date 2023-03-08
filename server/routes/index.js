const router = require('express').Router();
const ShopRouter = require('./ShopRouter');
const BikeRouter = require('./BikeRouter');

router.use('/shop', ShopRouter);
router.use('/bike', BikeRouter);

module.exports = router;