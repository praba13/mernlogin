const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc Get goals
// @route GET /api/goals
// @access Priavte
const getGoals = asyncHandler(async (req, res) => {
  //res.status(200).json({ message: 'Get Goals' });
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Get goals
// @route POST /api/goals
// @access Priavte
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text Field');
  }

  const goal = await Goal.create({
    text: req.body.text
  });

  //res.status(200).json({ message: 'Set Goals' });
  res.status(200).json(goal);
});

// @desc Update goals
// @route Put /api/goals/:id
// @access Priavte
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json(updatedGoal);
  //res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Priavte
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
  //res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
