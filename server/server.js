// url.com/?api-key=${process.env.api_key}
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const key = process.env.api_key

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Live on PORT: ${PORT}`));

module.exports = app;