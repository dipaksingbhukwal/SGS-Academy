var express = require('express');
var router = express.Router();

/* GET Foreign Language */
// ****************************************************************
router.get('/foreign-languages', function(req, res, next) {
  res.render('services/foreign-languages', { title: 'Foreign Language' });
});

router.get('/german', function(req, res, next) {
  res.render('services/german', { title: 'German Language' });
});

router.get('/french', function(req, res, next) {
  res.render('services/french', { title: 'French Language' });
});

router.get('/spanish', function(req, res, next) {
  res.render('services/spanish', { title: 'Spanish Language' });
});

router.get('/languages', function(req, res, next) {
  res.render('services/languages', { title: 'Languages' });
});

// ****************************************************************


/* GET CAD/FEA/CFD */
// ****************************************************************
router.get('/cad', function(req, res, next) {
  res.render('services/cad', { title: 'CAD/FEA/CFD' });
});
// ****************************************************************

/* GET MATLAB */
// ****************************************************************
router.get('/matlab', function(req, res, next) {
  res.render('services/matlab', { title: 'MATLAB' });
});
// ****************************************************************

/* GET Soft-Skill-Personality-Development */
// ****************************************************************
router.get('/soft-skill', function(req, res, next) {
  res.render('services/soft-skill', { title: 'Soft-Skill-Personality-Development' });
});
// ****************************************************************

module.exports = router;
