
const Dish = require('../models/dish');

// Create a new dish
exports.createDish = async (req, res) => {
  const { dishId, dishName, imageUrl, isPublished } = req.body;
  try {
    const newDish = new Dish({ dishId, dishName, imageUrl, isPublished });
    await newDish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update isPublished status
exports.updateDishStatus = async (req, res) => {
  const { dishId, isPublished } = req.body;
  try {
    const dish = await Dish.findOneAndUpdate({ dishId }, { isPublished }, { new: true });
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
