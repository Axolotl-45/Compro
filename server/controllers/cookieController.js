const { User } = require('../models/appModels');

const cookieController = {};

cookieController.cookieCreator = (req, res, next) => {
  // create cookie with name ssid, that has a value equal to the id
  try {
    const value = res.locals.id;
    res.cookie('ssid', value);
    return next();
  }
  catch (err) {
    return next(err);
  }
}

cookieController.cookieChecker = async (req, res, next) => {
  // check if there is a cookie currently
    // if there is, then find that user inside your db and return the breaches
    // else, nothing
  try {
    const value = req.cookies.ssid;

    if (value) {
      const data = await User.findById(value);
      return res.status(200).json(data.breaches);
    }
  }
  catch (err) {
    return next(err);
  }
}

module.exports = cookieController;