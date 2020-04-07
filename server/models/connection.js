const mongoose = require('mongoose');

let url = '';

if (process.env.NODE_ENV === 'production') {
  url = process.env.MONGO_ATLAS_URL; //url de db local o kmongo atlas
} else {
  url = process.env.MONGO_ATLAS_URL;
  //url = 'mongodb://localhost:27017/PetlinkDevelopment';
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

const { connection } = mongoose;

module.exports = {
  mongoose,
  connection
};
