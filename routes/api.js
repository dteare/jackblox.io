let express = require('express');
let router = express.Router();

const blobs = [];

router.get('/', function (req, res, next) {
  res.render('api');
});

router.get('/blobs', function (req, res, next) {
  res.send(`Blobs: ${JSON.stringify(blobs)}`);
});

router.get('/start', function (req, res, next) {
});

router.get('/move', function (req, res, next) {
});

module.exports = router;
