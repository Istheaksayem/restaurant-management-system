// Model Layer (Data)
// Note: In a real app, this would use Mongoose/Sequelize to interact with a Database
const restaurantsData = [
  { id: 1, name: 'Spicy Kitchen', cuisine: 'Indian' },
  { id: 2, name: 'Burger Joint', cuisine: 'American' }
];

class Restaurant {
  static getAll() {
    return restaurantsData;
  }
}

module.exports = Restaurant;
