const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
} = require('../controllers/goalsController');

//router.get('/', getGoals);
//router.post('/', setGoals);
router.route('/').get(getGoals).post(setGoals);

//router.put('/:id', updateGoals);
//router.delete('/:id', deleteGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;
