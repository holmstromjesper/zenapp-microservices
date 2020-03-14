
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
        if(!err){
            console.log("res", res)
        }
        else {
            console.log("error in getting user:", err.message) 
            throw err;
        }
    })
    console.log("query",query); 
    return query

};

exports.getUsers = async (userIDs) => {
    const query = await UserModel.find({userID: {$in :userIDs}}, (err,res)=>{
            if(!err){
                console.log("result from query: ", res)
            }
            else {
                console.log("error in finding users:", err.message) 
                throw err;
            }
        })
        console.log("query",query);
        return query
}

exports.getRange = async (limit) => {
    const query = await UserModel.find({userID: {$lt: limit}}, (err,res)=>{
        if(!err){
            console.log("result length: ", res.length)
        }
        else {
            console.log("error in finding users:", err.message) 
            throw err;
        }
    }).limit(limit);
    return query;
};


 