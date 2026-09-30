const Restaurant = require('../models/Restaurant');

// Controller Layer (Logic)
exports.getAllRestaurants = (req, res) => {
  try {
    const restaurants = Restaurant.getAll();
    res.status(200).json({
      success: true,
      data: restaurants
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
