const router = require('express').Router();
const ShopRouter = require('./ShopRouter');

router.use('/shop', ShopRouter)

module.exports = router;