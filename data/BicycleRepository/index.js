const config = require('../../config');

module.exports = require(`./${config.DB_DRIVER}`);
