
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
    return query; 
}

exports.getPosition = async (userID) => {
    console.log("running getPos 1");
    console.log('connecntioN?',mongoose.connection.readyState);

    var query = await UserPositionModel.find({'userID': 1});
    console.log('query:', query);
    var userPosition = await UserPositionModel.findOne({'userID': userID}, (err,res) => {
        if(err){
            console.log("error in finding user position")
        }
        if(!res){
            console.log("no matching user where found for updating the position")
        }
    }).catch(err=>{
        console.log(err.message)
    });
    console.log("running getPos 2");

    console.log(`[GET USERS SUBSCRIPTIONS SERVICE] userID: ${userID}
    position: ${userPosition}`);
    console.log("running getPos 3");

    return userPosition;
}