var express = require('express');
var calculatorSvc = require('../services/calculator');

var router = express.Router();

/* documents the calculator usage */
router.get('/', function(req, res) {
    console.log('calculator docs running ...');
    res.render('calculatorDocs', { title: 'Calculator Docs' });
});

/* calculate the sum of two numbers */
router.post('/', function(req, res) {
    console.log('calculator running ...');
    const payload = req.body;
    var value = calculatorSvc.sum(payload.x, payload.y);

    res.json({ x: payload.x, y: payload.y, sum: value });
});

module.exports = router;
