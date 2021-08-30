require('dotenv').config();
const fetch = require('node-fetch');
const { User } = require('../models/appModels');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const username = req.body.input;
    const result = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${username}?truncateResponse=false`, {
      method: 'GET',
      headers: {
        'hibp-api-key': process.env.api_key,
      },
    });
    const resultJson = await result.json();
    await User.create({
      username, breaches: [...resultJson],
    });
    return next();
  } catch (err) {
    return next(err);
  }
};

userController.updateUser = async (req, res, next) => {
  try {
    const name = req.body.input;
    const username = req.body.username;
    await User.findOneAndUpdate(
      { username: username },
      { $pull: { breaches: { Name: name } } }
    );
    return next();
  } catch (err) {
    return next(err);
  }
};

userController.getBreaches = async (req, res, next) => {
  try {
    const username = req.body.input;
    const userBreaches = await User.findOne({ username });
    res.locals.breaches = userBreaches.breaches;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
