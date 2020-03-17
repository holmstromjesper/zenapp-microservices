//import of mongoose
const mongoose = require('mongoose');
const ThirdPartyServiceModel = require('../models/thirdpartyservicemodel');

// setup connection
const mongoURL = 'mongodb://thirdpartyservicemongodb:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

// connect to db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'THIRDPARTYSERVICES MongoDB connection error:'))

//all
exports.getAllServices = async () => {
    const query = await ThirdPartyServiceModel.find({}).catch((err)=>{
        if(err){
            console.log(err.message)
        }
    });
    if(query){
        return query
    } else {
        return null
    }
}

//one or more
exports.getServices = async (serviceIDs) => {

    const query = await ThirdPartyServiceModel.find({serviceID: {$in :serviceIDs}}, (err,res)=>{
        if(err){
            console.log("error in callback:", err.message) 
        }
    })

    if(query){
        return query
    }else{
        return null
    }
}

exports.getService = async (serviceID) => {
    const query = await ThirdPartyServiceModel.find({serviceID: serviceID}, (err,res)=>{
        if(err) {
            console.log("error in getting service:", err.message) 
        }
    })
    if(query){
        return query
    } else {
        return null
    }
}



exports.setServiceStatus = async ({serviceID, active}) => {
    var query = await ThirdPartyServiceModel.findOneAndUpdate({'serviceID': serviceID}, {'active': active}, {new:true}, (err, doc) => {
        if(err){
            console.log("error in updating")
        }
    })
    if(query){
        return query
    } else {
        return null
    }
}

exports.addNewService = async (newServiceObject) => {
    const query = await ThirdPartyServiceModel.findOneAndUpdate(
        {serviceID: newServiceObject.serviceID}, 
        newServiceObject, 
        {upsert:true, new:true}, 
        (err) => {
            if(err){
                console.log(err.message)}
        })
    if(query){
        return query
    } else {
        return null
    }
};

exports.getServiceUrls = async(subscriptions) => {
    let responsearray = []
    responsearray = subscriptions.map( async subscription => {
        const url = await ThirdPartyServiceModel.findOne(
            {serviceID:subscription.serviceID},
            'serviceURL',
            )
        subscription.serviceURL = url.serviceURL;
        return await subscription;
    }); 
    const response = await Promise.all(responsearray)
    return response;
}

