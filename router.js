const { Router } = require('express');
const bicycleRoutes = require('./controllers/BicycleController.js');

// Create a new router
const router = Router();

// Define routes
router.use('/api', bicycleRoutes);

// default
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the router
module.exports = router;