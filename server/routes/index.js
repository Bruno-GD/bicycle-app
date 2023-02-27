const router = require('express').Router();
const ShopRouter = require('./ShopRouter');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/shop', ShopRouter)

module.exports = router;