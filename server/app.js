const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');

// Middleware
app.use(cors());

// Static
// match all excluding /api/*
app.all(/^(?!\/api).*/, function(req, res, next) {
    let reqPath = path.join(__dirname, '..', 'public', req.path)
    if (req.path === '/') reqPath = path.join(__dirname, '..', 'public', 'index.html')
    // path inside public/ folder exists?
    if (fs.existsSync(reqPath)) {
        // yes, serve it
        req.file = req.path;
        next();
    }
    else {
        // no, serve index.html
        req.file = '/';
        next();
    }
}, function(req, res, next) {
    if (req.file === '/') {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '..', 'public', req.file));
    }
});

// Routes
app.use('/api', require('./routes'));

// Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
});

// Export
module.exports = app;