/*ErikSkaragos_Portfolio, Erik Skaragos, 301344796, September 24,2023. */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // Render home page
  res.render('home', {title: 'Home' });
});

router.get('/about', (req, res, next) => {
  // Render about page
  res.render('about', {title: 'About Me' });
});

router.get('/projects', (req, res, next) => {
    //Render projects page
    res.render('projects', {title: 'Projects'});
});

router.get('/services', (req, res, next) => {
    //Render services page
    res.render('services', {title: 'Services'});
});

router.get('/contact', (req, res, next) => {
    //Render contact page
    res.render('contact', {title: 'Contact'});
});

module.exports = router;
