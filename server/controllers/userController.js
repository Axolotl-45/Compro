require('dotenv').config();
const fetch = require('node-fetch');
const { User, Breach } = require('../models/appModels');

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        const username = req.body.input;
        const breaches = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${username}`, {
            method: 'GET',
            headers: {
                'hibp-key': process.env.api_key
            }
        })
        const breachesAdj = breaches.json();
        await User.create({
            username,
            breaches: breachesAdj,
        })
        return next();
    } catch (err) {
        return next(err);
    }
}

userController.updateUser = (req, res, next) => {
    try {
        const userId = req.body.input;
        const breachName = req.body;
        await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { breaches: { name: breachName } } }
        );
        return next();
    } catch (err) {
        return next(err);
    }
}

userController.getBreaches = async (req, res, next) => {
    try {
        const userId = req.body.input;
        const userBreaches = await User.findById(userId);
        res.locals.breaches = userBreaches.breaches;
        return next();
    } catch (err) {
        return next(err);
    }
}

export default userController;