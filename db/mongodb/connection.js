const config = require('../../config');
const mongoose = require('mongoose');

const connectionString = `mongodb://${config.MONGO_DB_USER}:${config.MONGO_DB_PASSWORD}@${config.MONGO_DB_HOST}:${config.MONGO_DB_PORT}/${config.MONGO_DB_NAME}`
mongoose.connect(connectionString);

mongoose.connection
    .once('open', () => {
        console.log('Connected to MongoDB | ', config.NODE_ENV);
        if (config.NODE_ENV === 'development') {
            mongoose.set('debug', true);
            require('./seeds/bicycles_seed');
        }
    })
    .on('error', (error) => {
        console.log('Connection error:', error);
        console.log('Connection string:', connectionString);
    })
    .on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

module.exports = mongoose;