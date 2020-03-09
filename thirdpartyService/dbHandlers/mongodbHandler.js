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
    return query = await ThirdPartyServiceModel.find({}).catch((err)=>{
        console.log(err.message)
        return false;
    });
}

//one or more
exports.getServices = async (serviceIDs) => {
    console.log("serviceIDs in mongodbhandler",serviceIDs)
        if(!serviceIDs.some(isNaN)){
        const query = await ThirdPartyServiceModel.find({serviceID: {$in :serviceIDs}}, (err,res)=>{
            if(!err){
                console.log("res", res)
            }
            else {
                console.log("error in callback:", err) 
                throw err;
            }
        })
        console.log("query",query);
        return query
    }
    else{
        return "invalid input"
    }
    
}

exports.setServiceStatus = async ({serviceID, active}) => {
    console.log(serviceID, active)
    var query = await ThirdPartyServiceModel.findOneAndUpdate({'serviceID': serviceID}, {'active': active}, {new:true}, (err, doc) => {
        if(err){
            console.log("error in updating")
            throw err;
        }
        if(doc){
            console.log("successfully updated")
        }
    })

    return query;
}

exports.addNewService = async (newServiceObject) => {
    var newService = new ThirdPartyServiceModel(newServiceObject);
    console.log(newServiceObject)
    const query = await ThirdPartyServiceModel.findOneAndUpdate({serviceID: newServiceObject.serviceID}, newServiceObject, {upsert:true, new:true}, (err, doc) => {
        if(err){
            console.log("error in creating service", err)
        } else {
            console.log("success in creating service:", doc)
        }
    })
    return query
};

exports.getServiceUrls = async(subscriptions) => {
    let responsearray = []
    responsearray = subscriptions.map( async subscription => {
        console.log('subscription in dbhandler',subscription)
        const url = await ThirdPartyServiceModel.findOne(
            {serviceID:subscription.serviceID},
            'serviceURL',
            )
        console.log("url", url)
        subscription.serviceURL = url.serviceURL;
        return await subscription;
    }); 
    const response = await Promise.all(responsearray)
    return response;
}

