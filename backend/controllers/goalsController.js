const asyncHandler = require('express-async-handler');
// @desc Get goals
// @route GET /api/goals
// @access Priavte
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' });
});

// @desc Get goals
// @route POST /api/goals
// @access Priavte
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text Field');
  }

  res.status(200).json({ message: 'Set Goals' });
});

// @desc Update goals
// @route Put /api/goals/:id
// @access Priavte
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Priavte
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
