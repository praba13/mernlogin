const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 6000;

//app.get('/api/goals', (req, res) => {
//res.send('Get Goals');
//res.json({ message: 'Get Goals' });
//res.status(200).json({ message: 'Get Goals' });
//});

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(PORT, () =>
  console.log(`SERVER IS RUNNING ON PORT ${PORT} !!!`.magenta)
);
