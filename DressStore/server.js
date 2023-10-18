/*ErikSkaragos_Assignment2, Erik Skaragos, 301344796, October 18, 2023. */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

app.use('/api/products', require('./app/routes/productRoutes'));
app.use('/api/categories', require('./app/routes/categoriesRoutes'));

app.get('/', (req, res) => {
  res.send('{"message":"Welcome to DressStore application."}');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

module.exports = app;
