// load environment variables from .env file
require('dotenv').config();

module.exports = {
    PORT: parseInt(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_DRIVER: process.env.DB_DRIVER || 'memory',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: parseInt(process.env.DB_PORT) || 3306,
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DATABASE: process.env.DB_DATABASE || 'app',
    MONGO: {
        DB_URI: process.env.MONGO_DB_URI || 'mongodb://localhost:27017',
        DB_NAME: process.env.MONGO_DB_NAME || 'app',
    }
}