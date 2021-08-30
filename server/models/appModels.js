require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@compro.nudsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'compro',
  useFindAndModify: false
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log('Connection to Mongo DB failed.', err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  breaches: [Object],
});
const User = mongoose.model('user', userSchema);

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: '30', default: Date.now },
});
const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  Session,
};