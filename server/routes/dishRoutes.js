// routes/dishRoutes.js
const express = require('express');
const { createDish, getAllDishes, updateDishStatus } = require('../controllers/dishcontroller');
const router = express.Router();

router.post('/create', createDish);
router.get('/dishes', getAllDishes);
router.put('/update-status', updateDishStatus);

module.exports = router;
