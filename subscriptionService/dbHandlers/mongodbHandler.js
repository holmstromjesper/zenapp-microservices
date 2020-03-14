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
    console.log(userID)
    let response;
    var query = await UserSubscriptionModel.find({'userID': userID}, (err,res)=>{
        if(err){
            console.log("error in finding users subscriptions")
        }
        if(!res){
            console.log("no match was found user subscriptions or matching user where found")
        }
    });
    console.log(`[GET USERS SUBSCRIPTIONS SERVICE] userID: ${userID}
    query: ${query}`);
    return query;
}

exports.subscribe = async (userID, serviceObject) => {   
    let response = null;
    var query =  await UserSubscriptionModel.findOneAndUpdate(
        {'userID':userID, 'subscriptions.serviceID' : {$ne : serviceObject.serviceID}}, 
        {$push: {'subscriptions': serviceObject}},
        {new: true}).exec((err,res) => {
            if(err){
                console.log("ERROR", err)
            }else{
                console.log("result",res)
                response = res
            }
        })
            
    console.log(`[USERSUBSRIBING TO SERVICE QUERY] userID: ${userID}, serviceID: ${serviceObject.serviceID}
    query: ${query}`);
    if(response){
        return response
    }
    else{
        return null
    }
};

exports.getRange = async (limit) => {
    const query = await UserSubscriptionModel.find({userID: {$lt: limit}}, (err,res)=>{
        if(!err){
            console.log("results length: ", res.length)
        }
        else {
            console.log("error in finding users:", err.message) 
            throw err;
        }
    }).limit(limit);
    return query;
};