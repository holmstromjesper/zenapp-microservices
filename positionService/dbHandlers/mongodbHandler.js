
//import of mongoose
const mongoose = require('mongoose');
const UserPositionModel = require('../models/userpositionmodel');
// setup connection
const mongoURL = 'mongodb://positionmongodb:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true}).catch(error => console.log(error));

// connect to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection errror:'))


exports.updatePosition = async (positionObject, userID) => {
    positionObject['timestamp']= Date.now();
    var query = await UserPositionModel.findOneAndUpdate(
        {'userID': userID},  
        { 'position' : positionObject }, 
        {new: true},
        (err) => {
            if(err){
                console.log("error in updating", err.message)
            }
        })
    if(query){
        return query; 
    } else {
        return null;
    }
}

exports.getPosition = async (userID) => {

    var query = await UserPositionModel.find({'userID': userID}, (err,res) => {
        if(err){
            console.log("error in finding user position", err.message)
        }
    })
    if(query){
        return query; 
    } else {
        return null;
    }
}
exports.getPositions = async (userIDs) => {
    var query = await UserPositionModel.find(
        {'userID': {$in : userIDs}}, 
        (err) => {
            if(err){
                console.log("error in finding user position", err.message)
            }
    })
    if(query){
        return query; 
    } else {
        return null;
    }
};

exports.getRange = async (limit) => {
    const query = await UserPositionModel.find({userID: {$lt: limit}},
        (err)=>{
            if(err){
                console.log("results length: ", err.message)
            }
    }).limit(limit);
    if(query){
        return query; 
    } else {
        return null;
    }
};