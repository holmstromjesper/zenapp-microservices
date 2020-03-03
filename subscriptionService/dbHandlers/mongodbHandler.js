//import of mongoose
const mongoose = require('mongoose');
const UserModel = require('../models/usermodelschema');
const ThirdPartyServiceModel = require('../models/thirdpartyservicemodel');
// setup connection
const mongoURL = 'mongodb://mongo:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
// connect to db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection errror:'))

exports.getUserSubscriptions = async (id) => {
    var query = await UserModel.findOne({'id': id}).catch(err => {
        return false;
    });
    return query.subscriptions;
}

exports.subscribe = async (userID, serviceID) => {
    var query = await UserModel.findOneAndUpdate({'id':userID}, {$addToSet: {'subscriptions': serviceID}})
    .catch(err => {
        console.log(err.message)
        return false
    });
    return query
}