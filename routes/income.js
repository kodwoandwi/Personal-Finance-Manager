// routes/income.js
const express = require('express');
const router = express.Router();
const Income = require('../models/Income');
const auth = require('../middleware/auth');

// Add new income
router.post('/', auth, async (req, res) => {
  const { source, amount } = req.body;
  try {
    const newIncome = new Income({
      user: req.user.id,
      source,
      amount,
    });
    const income = await newIncome.save();
    res.json(income);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all income for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user.id });
    res.json(incomes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
