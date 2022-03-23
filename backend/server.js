const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.get('/api/goals', (req, res) => {
//res.send('Get Goals');
//res.json({ message: 'Get Goals' });
//res.status(200).json({ message: 'Get Goals' });
//});

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  connectDB();
  console.log(`SERVER IS RUNNING ON PORT ${PORT} !!!`.magenta);
});
