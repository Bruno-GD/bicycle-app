const DATA = {
    Shop: [],
    Bike: [],
    Stock: []
}

if (process.env.NODE_ENV != 'production') {
    DATA.Shop = require('./shop');
    DATA.Bike = require('./bicycle');
    DATA.Stock = require('./stock');
}

module.exports = DATA;