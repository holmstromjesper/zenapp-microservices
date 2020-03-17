
//import of mongoose
const mongoose = require('mongoose');
const UserModel = require('../models/usermodelschema');
// setup connection
const mongoURL = 'mongodb://usermongodb:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
// connect to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection errror:'))


exports.getUser = async (userID) => {

    const query = await UserModel.find({userID: userID}, (err,res)=>{
        if(err){
            console.log("error in getting user:", err.message) 
        }
    })
    if(query){
        return query
    } else {
        return null
    }
};

exports.getUsers = async (userIDs) => {
    const query = await UserModel.find({userID: {$in :userIDs}}, (err,res)=>{
            if(err){
                console.log("result from query: ", err.message)
            }
        })
        if(query){
            return query
        } else {
            return null
        }
}

exports.getRange = async (limit) => {
    const query = await UserModel.find({userID: {$lt: limit}}, (err,res)=>{
        if(err){
            console.log("result length: ", err.message)
        }
    }).limit(limit);
    if(query){
        return query
    } else {
        return null
    }
};


 