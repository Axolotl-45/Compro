require('dotenv').config();
const mongoose = require('mongoose');


// update
const MONGO_URI = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@compro.nudsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'compro',
  useFindAndModify: false
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  //userid
  username: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  breaches: [Object],

  // {
  //   name: String,
  //   title: String,
  //   domain: String,
  //   breach_date: String,
  //   pwn_count: Number, // integer
  //   description: String,
  //   logo_path: String,
  //   is_verified: Boolean,
  // }

  // breaches: [{
  //   //references the breach
  //   type: Schema.Types.ObjectId,
  //   ref: 'breach'
  // }],
});

const User = mongoose.model('user', userSchema);

// const breachSchema = new Schema({
//   //breachid
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'user'
//   },
//   name: String,
//   title: String,
//   domain: String,
//   breach_date: String,
//   pwn_count: String,
//   description: String,
//   logo_path: String,
//   is_verified: Boolean,

// });

// const Breach = mongoose.model('breach', breachSchema);

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: '30', default: Date.now },
});

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  // Breach,
  Session,
};