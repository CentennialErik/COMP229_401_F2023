/*ErikSkaragos_Portfolio, Erik Skaragos, 301344796, September 24,2023. */
process.env.NDOE_ENV = process.env.NODE_ENV || 'development'

var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');