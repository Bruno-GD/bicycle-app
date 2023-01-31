const mongoose = require('mongoose');
const config = require('../../config');

async function connect() {
    return new Promise((resolve, reject) => {
        conn = mongoose.createConnection(config.MONGO.DB_URI, {
            dbName: config.MONGO.DB_NAME,
        });

        if (config.NODE_ENV != 'production') {
            mongoose.set('debug', true);
            conn = conn.useDb(config.MONGO.DB_NAME + '_test');
        }

        conn.once('open', async () => {
            if (config.NODE_ENV === 'production') {
                return resolve(conn);
            }

            // execute migrations
            try {
                await conn.collection('shop').drop();
            } catch {}
            await conn.collection('shop').insertMany(require('./shop'));

            resolve(conn);
        })

        conn.on('error', (err) => {
            reject(err);
        })

        conn.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
    });
}

module.exports = {
    // IIFE
    connect: (function() {
        var conn;
        return async function() {
            if (conn) return conn;
            return conn = await connect();
        }
    })(),
}