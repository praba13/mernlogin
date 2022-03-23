// @desc Get goals
// @route GET /api/goals
// @access Priavte
const getGoals =
  ('/',
  (req, res) => {
    res.status(200).json({ message: 'Get Goals' });
  });

// @desc Get goals
// @route POST /api/goals
// @access Priavte
const setGoals =
  ('/',
  (req, res) => {
    res.status(200).json({ message: 'Set Goals' });
  });

// @desc Update goals
// @route Put /api/goals/:id
// @access Priavte
const updateGoals =
  ('/',
  (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
  });

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Priavte
const deleteGoals =
  ('/',
  (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
  });

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
