const express = require('express');
const router = require('./router.js');
const cors = require('cors');
// Create a new express application
const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

// Add the router to the express application
app.use(router);

// Catch errors and 404
app.use((err, req, res, next) => {
    return res.status(500).send(err);
});

app.use((req, res, next) => {
    return res.status(404).send('Not found');
});

module.exports = app;