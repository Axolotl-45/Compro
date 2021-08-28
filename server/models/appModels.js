const mongoose = require('mongoose');
// update
const MONGO_URI = 'mongodb+srv://charlesgut:codesmith1234@twitchapp.6zq6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'login' // update
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  breaches: [String],
});

const User = mongoose.model('user', userSchema);

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: '30', default: Date.now },
});

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  Session
};