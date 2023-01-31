const DATA = {
    Shop: [],
    Bicycle: [],
    Stock: []
}

if (process.env.NODE_ENV != 'production') {
    DATA.Shop = require('./shop');
    DATA.Bicycle = require('./bicycle');
    DATA.Stock = require('./stock');
}

module.exports = DATA;