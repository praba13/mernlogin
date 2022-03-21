const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 6000;

app.listen(PORT, () =>
  console.log(`Server Running on PORT ${PORT}`.magenta.bold)
);
