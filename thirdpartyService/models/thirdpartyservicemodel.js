const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ThirdPartyServiceModelSchema = new Schema({
    serviceID: {
        type: Number,
        unique: true
    },
    serviceName: String,
    serviceType: String,
    description: String,
    serviceURL: String,
    position: {
        _id: false,
        lat: Number,
        long: Number
    },
    active: Number,
    settings : [],
    experiment: Number
});
var ThirdPartyServiceModel = mongoose.model('ThirdPartyServiceModel', ThirdPartyServiceModelSchema);

module.exports = ThirdPartyServiceModel;