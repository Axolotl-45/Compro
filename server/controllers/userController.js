require('dotenv').config();
const fetch = require('node-fetch');
const { User } = require('../models/appModels');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const username = req.body.input;
    // run a find to see if the user exists already
      // if yes, then return out the db breaches
      // else, run this shizz below
    const userCheck = await User.findOne({ username: username });
    if (userCheck) {
      res.locals.id = userCheck._id;
      return next();
    }

    const result = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${username}?truncateResponse=false`, {
      method: 'GET',
      headers: {
        'hibp-api-key': process.env.api_key,
      },
    });
    const resultJson = await result.json();
    const newUser = await User.create({
      username, breaches: [...resultJson],
    });
    res.locals.id = newUser._id;
    return next();
  }
  catch (err) {
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
  }
  catch (err) {
    return next(err);
  }
};

userController.getBreaches = async (req, res, next) => {
  try {
    const username = req.body.input || res.locals.user;
    const userBreaches = await User.findOne({ username });
    res.locals.breaches = userBreaches.breaches;
    return next();
  }
  catch (err) {
    return next(err);
  }
};

module.exports = userController;