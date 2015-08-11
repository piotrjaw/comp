var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    entryDate: {type: Date, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, lowercase: true, required: true},
	repFirstName: {type: String, required: true},
	repLastName: {type: String, required: true},
	repEmail: {type: String, lowercase: true, required: true},
	storeName: {type: String, required: true},
	storeCity: {type: String, required: true},
	storeStreet: {type: String,required: true},
	extraExpositionDescription: {type: String, required: true},
	extraExpositionPeriod: {type: String, required: true},
	extraExpositionType: {type: String, required: true},
	extraExpositionNumber: {type: Number, required: true},
	extraExpositionPhotoFileName1: {type: String},
	extraExpositionPhotoFileName2: {type: String}
});

mongoose.model('Entry', EntrySchema);