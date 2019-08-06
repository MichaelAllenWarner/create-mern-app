import mongoose from 'mongoose';

const connectToDb = () => {
  // connect
  // for local (see https://github.com/mongodb/homebrew-brew for Mac/Brew setup):
  const uri = 'mongodb://localhost:27017/doodads';
  // for non-local (set DB_URI in process.env; .env already .gitignore'd):
  // const uri = process.env.DB_URI;
  mongoose.connect(uri, { useNewUrlParser: true });

  // logging
  const db = mongoose.connection;
  db.on('error', err => {
    console.error('db connection error:', err);
  });
  db.once('open', () => {
    console.log('db connected');
  });
};

export { connectToDb };