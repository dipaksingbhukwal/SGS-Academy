var express = require('express');
var router = express.Router();

/* Get About - Introduction page*/
router.get('/introduction', function(req, res, next) {
  res.render('about/introduction', { title: 'Introduction' });
});

/* Get About - Our Team page*/
router.get('/ourteam', function(req, res, next) {
  res.render('about/ourteam', { title: 'Out Team' });
});

/* Get About - Highlights page*/
router.get('/highlights', function(req, res, next) {
  res.render('about/highlights', { title: 'Highlights' });
});

/* Get About - Student Reviews page*/
router.get('/student_reviews', function(req, res, next) {
  res.render('about/student_reviews', { title: 'Student Reviews' });
});


module.exports = router;
