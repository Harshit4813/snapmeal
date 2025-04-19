const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const food = new Food({
      name,
      description,
      price,
      image,
      category
    });
    await food.save();
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;