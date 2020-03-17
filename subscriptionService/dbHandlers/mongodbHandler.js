//import of mongoose
const mongoose = require('mongoose');
const UserSubscriptionModel = require('../models/usersubscriptionmodel.js');
// setup connection
const mongoURL = 'mongodb://subscriptionmongodb:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

// connect to db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'USERSUBSCRIPTIONS MongoDB connection error:'))

exports.getUserSubscriptions = async (userID) => {
    console.log(typeof userID)
    var query = await UserSubscriptionModel.find({'userID': userID}, (err,res)=>{
        if(err){
            console.log("error in finding users subscriptions")
        }
    });
    if(query){
        return query
    } else {
        return null
    }
}
exports.getUsersSubscriptions = async (userIDs) => {
    var query = await UserSubscriptionModel.find(
        {'userID': {$in : userIDs}},'userID subscriptions' , (err) => {
            if(err){
                console.log("error in finding user position")
            }
    })
    if(query){
        return query
    } else {
        return null
    }
}

exports.subscribe = async (userID, serviceObject) => {   

    var query =  await UserSubscriptionModel.findOneAndUpdate(
        {'userID':userID, 'subscriptions.serviceID' : {$ne : serviceObject.serviceID}}, 
        {$push: {'subscriptions': serviceObject}},
        {new: true})

    if(query){
        return query
    } else {
        return null
    }
};

exports.unsubscribe = async (userID, serviceID) => {
    const query = await UserSubscriptionModel.findOneAndUpdate(
        {'userID': userID, 'subscriptions.serviceID': serviceID},
        {$pull :{
            subscriptions: {'serviceID': serviceID} 
        }},
        {new: true}
    )
    if(query){
        return query
    } else {
        return null
    }
}

exports.getRange = async (limit) => {
    const query = await UserSubscriptionModel.find({userID: {$lt: limit}}, (err,res)=>{
        if(!err){
            console.log("results length: ", res.length)
        }
        else {
            console.log("error in finding users:") 
            throw new Error(err.message);
        }
    }).limit(limit);
    if(query){
        return query
    } else {
        return null
    }
};