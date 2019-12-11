const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true // add this line as per npm warnings
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
