const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');

module.exports = function () {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(express.static(path.join(__dirname, '../public')));
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));

  mongoose.connect('mongodb+srv://eskarago:DressStore@dressstore.rc3pfo8.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  db.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  process.on('SIGINT', () => {
    db.close(() => {
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });
  });

  return app;
};
