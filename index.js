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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port http://localhost:' + PORT);
});