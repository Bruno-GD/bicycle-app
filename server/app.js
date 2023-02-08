const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());

// Frontend
app.use(express.static('dist'));

// Routes
app.use(require('./routes'));

// Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
});

// Export
module.exports = app;