
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
    console.log("positionObject", positionObject)
    console.log("userID", userID)
    var user = await UserPositionModel.findOneAndUpdate(
        {'userID': userID},  
        { 'position' : positionObject }, 
        {new: true},
        (err,res) => {
            if(err){
                console.log("error in updating user position")
            }
            if(!res){
                console.log("no user were found")
            }
        })
    .catch((err)=>{
        console.log(err.message)
    });
    console.log(`[UPDATE USER POSITION SERVICE] userID: ${userID}, position: ${positionObject}
    user: ${user}`);
    return user; 
}

exports.getPosition = async (userID) => {

    var userPosition = await UserPositionModel.find({'userID': userID}, (err,res) => {
        if(err){
            console.log("error in finding user position")
        }
        if(!res){
            console.log("no matching user where found for updating the position")
        }
    }).catch(err=>{
        console.log(err.message)
    });

    console.log(`[GET USERS SUBSCRIPTIONS SERVICE] userID: ${userID}
    position: ${userPosition}`);
 
    return userPosition;
}
exports.getPositions = async (userIDs) => {

    console.log("userIDS: in get positions", userIDs)
    if(!userIDs.some(isNaN)){
        var query = await UserPositionModel.find(
            {'userID': {$in : userIDs}}, 
                (err, res) => {
                    if(err){
                        console.log("error in finding user position")
                    }
                    if(!res){
                        console.log("no matching user where found for updating the position")
                    }
        }).catch(err=>{
            console.log(err.message)
        });
        console.log(`[GET USERS SUBSCRIPTIONS SERVICE] userIDs: ${userIDs}
        position: ${query}`);
        return query;
     
    }
    else return null;
};

exports.getRange = async (limit) => {
    const query = await UserPositionModel.find({userID: {$lt: limit}}, (err,res)=>{
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