// url.com/?api-key=${process.env.api_key}
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const userController = require('./controllers/userController');

const key = process.env.api_key

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//routes

// this is going to be the saved breach data on reload (this goes inside of useEffect or componentDidMount)
app.get('/api/renderUser',
  userController.getBreaches,
  (req, res) => {
    return res.status(200).json(res.locals.breaches);
  }
)

// when user clicks submit button, we are invoking this route (creates user in DB + sends back the infoon breaches)
app.post('/api/createUser',
  userController.createUser,
  userController.getBreaches,
  (req, res) => {
    return res.status(200).json(res.locals.breaches);
  }
)

//when user clicks delete btn on a breach, create an update request to server
app.patch('/api/updateUser',
  userController.updateUser,
  (req, res) => {
    return res.status(200).json({ message: 'breach deleted' });
  })

// error handlers
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

// server listener
app.listen(PORT, () => console.log(`Live on PORT: ${PORT}`));

module.exports = app;