
//import of mongoose
const mongoose = require('mongoose');
const UserModel = require('../models/usermodelschema');
// setup connection
const mongoURL = 'mongodb://usermongodb:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
// connect to db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection errror:'))

exports.createUser = (userObject) => {
    var newUser = new UserModel(userObject);

    newUser.save(err => {
        if(err){
            console.log(err)
        } else {
            console.log('User saved successfully');
        }
    });
};
const getAllUsers = async ()  =>{
    return query = await UserModel.find({}).catch((err) =>{
        console.log('error:', err.message)
        return false;
    });
}
exports.findUser = async (ids) => {
    
    if(ids == null){
        return getAllUsers();
    } 
    return query = await UserModel.find({'id': {$in : ids}}).catch((err) =>{
        console.log('error:', err.message)
        return false;
    });
}


 