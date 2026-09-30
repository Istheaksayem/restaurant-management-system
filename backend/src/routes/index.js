const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Define routes (View/Route layer)
router.get('/restaurants', restaurantController.getAllRestaurants);

module.exports = router;
