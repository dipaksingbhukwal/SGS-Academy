var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testimonial', function(req, res, next) {
  res.render('testimonial', { title: 'Testimonial' });
});


router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});


router.get('/contact-us', function(req, res, next) {
  res.render('contact-us', { title: 'Contact-Us' });
});

module.exports = router;
