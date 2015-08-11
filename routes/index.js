var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var moment = require('moment');

var mongoose = require('mongoose');

var Entry = mongoose.model('Entry');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, req.body.repFirstName + '_' + req.body.repLastName + '_' + moment().format('YYYYMMDD_hhmmssSSS') + '.jpg')
    }
});


var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/postEntry', upload.array('photos', 2), function(req, res, next) {
    var entry = new Entry({
		entryDate: moment(),
        firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		repFirstName: req.body.repFirstName,
		repLastName: req.body.repLastName,
		repEmail: req.body.repEmail,
		storeName: req.body.storeName,
		storeCity: req.body.storeCity,
		storeStreet: req.body.storeStreet,
		extraExpositionDescription: req.body.extraExpositionDescription,
		extraExpositionPeriod: req.body.extraExpositionPeriod,
		extraExpositionType: req.body.extraExpositionType,
		extraExpositionNumber: req.body.extraExpositionNumber
	});
	
    console.log(entry);
    
	entry.save(function(err){
		if(err) {};
		return res.status(201).json(entry);
	})
	
});

module.exports = router;
