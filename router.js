const { Router } = require('express');
const bicycleRoutes = require('./controllers/BicycleController.js');

// Create a new router
const router = Router();

// Define routes
router.use('/api', bicycleRoutes);

// Export the router
module.exports = router;