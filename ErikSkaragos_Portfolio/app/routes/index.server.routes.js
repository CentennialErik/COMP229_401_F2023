module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
  
    // Route for the Home page
    app.get('/', index.render);
    // Route for the About page
    app.get('/about', function(req, res) {
      res.render('about');
    });
    // Route for the Projects page
    app.get('/projects', function(req, res) {
      res.render('projects');
    });
    // Route for the Services page
    app.get('/services', function(req, res) {
      res.render('services');
    });
    // Route for the Contact page
    app.get('/contact', function(req, res) {
      res.render('contact');
    });
  };
  /*ErikSkaragos_Portfolio, Erik Skaragos, 301344796, September 24,2023. */