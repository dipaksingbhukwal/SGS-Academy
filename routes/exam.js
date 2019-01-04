var express = require('express');
var router = express.Router();

/* GET Overseas Entrance Exam */
// ****************************************************************
router.get('/', function(req, res, next) {
  res.render('exam/index', { title: 'Exams' });
});

router.get('/gre', function(req, res, next) {
  res.render('exam/gre', { title: 'GRE' });
});

router.get('/gmat', function(req, res, next) {
  res.render('exam/gmat', { title: 'GMAT' });
});

router.get('/ielts', function(req, res, next) {
  res.render('exam/ielts', { title: 'IELTS' });
});

router.get('/toefl', function(req, res, next) {
  res.render('exam/toefl', { title: 'TOEFL' });
});

router.get('/pte', function(req, res, next) {
  res.render('exam/pte', { title: 'PTE' });
});

router.get('/sat', function(req, res, next) {
  res.render('exam/sat', { title: 'SAT' });
});
// ****************************************************************



module.exports = router;
