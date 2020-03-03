
//import of mongoose
const mongoose = require('mongoose');
const UserModel = require('../models/usermodelschema');
const ThirdPartyServiceModel = require('../models/thirdpartyservicemodel');
// setup connection
const mongoURL = 'mongodb://mongo:27017/database';
mongoose.connect(mongoURL, {useNewUrlParser: true});
// connect to db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection errror:'))


exports.addNewService = async (newServiceObject) => {
    var newService = new ThirdPartyServiceModel(newServiceObject);
    /*await newService.save(async (err)  =>  {
        if(err){
            console.log('error in bulkwrite of user: ',err)
            return false;
        } else {
            console.log('Service saved successfully');
            return true;
        }
    })*/
    return await newService.save();
};


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

exports.updatePosition = async (positionObject, id) => {
    positionObject['timestamp']= Date.now();
    var query = await UserModel.findOneAndUpdate({'id': id},  { 'position' : positionObject }, {new: true}).catch((err)=>{
        console.log(err.message)
        return false;
    });
    return query; 
}

exports.getPosition = async (userID) => {
    var user = await UserModel.findOne({'id': userID}).catch((err)=>{
        console.log(err.message)
        return false
    });
    return user.position;
}

const getAllServices = async () => {
    return query = await ThirdPartyServiceModel.find({}).catch((err)=>{
        console.log(err.message)
        return false;
    });
}
exports.getServices = async (ids) => {
    if(ids == null){
        return getAllServices();
    } 
    return query = await ThirdPartyServiceModel.find({id: {$in :ids}}).catch((err)=>{
        console.log('error: ',err.message)
        return false;
    });
}

exports.setServiceStatus = async ({id, active}) => {
    var query = await ThirdPartyServiceModel.findOneAndUpdate({'id': id}, {'active': active})
    .catch(err=>{
        console.log('error in setServiceStatus: ',err.message)
        return false;
    })
    return query;
}




exports.getUserSubscriptions = async (id) => {
    var query = await UserModel.findOne({'id': id}).catch(err => {
        return false;
    });
    return query.subscriptions;
}

exports.subscribe = async (userID, serviceID) => {
    var query = await UserModel.findOneAndUpdate({'id':userID}, {$addToSet: {'subscriptions': serviceID}})
    .catch(err => {
        console.log(err.message)
        return false
    });
    return query
}

 