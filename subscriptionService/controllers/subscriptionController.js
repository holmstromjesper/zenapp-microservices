const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUserSubscription = async (req, res) => {
    const userID =req.query.userID;
    if(!isNaN(userID)){
        const subscriptions = await mongoDBHandler.getUserSubscriptions(userID);
        if(subscriptions){
            res.status(200).send(JSON.stringify(subscriptions));
        }else{
            res.status(400).send("could not find user subscriptions");
        }
    } else {
        return res.status(400).send("invalid input");

    }
}
exports.getUsersSubscriptions = async (req, res) => {
    const userIDs = req.body.userIDs
    if(!userIDs.some(isNaN)){
        const response = await mongoDBHandler.getUsersSubscriptions(userIDs);
        if(response){
            res.status(200).send(JSON.stringify(response));
        }
        else{
            res.status(400).send("could not fetch users' subscriptions");
        }
    } else {
        res.status(400).send("invalid input")

    }
}


exports.subscribe = async (req,res) => {
    let userID = req.body.userID;
    let serviceObject = req.body.serviceobject;
    const response = mongoDBHandler.subscribe(userID, serviceObject)

    if(response){
        res.status(200).send("Subscribes to service " + serviceObject);
    }
    else{
        res.status(400).send("FAILED subscribed to service");
    }
};

exports.unsubscribe = async (req,res) => {
    const userID = req.query.userID
    const serviceID = req.query.serviceID
    const response = await mongoDBHandler.unsubscribe(userID, serviceID)
    if(response){
        res.status(200).send("succesfully unsubscribed")
    }else{
        res.status(400).send("could not unsubscribe")
    }
};

//this is the experiment3 function which returns a batch of users to be joined in api composer
exports.getRangeOfUsersSubscriptions = async (req,res) => {
    let userLimit = req.query.limit;
    if(!isNaN(userLimit)){
        const response = await mongoDBHandler.getRange(userLimit);
        if(response){
            res.status(200).send(JSON.stringify(response));
        }
        else{
            res.status(400).send("could not fetch batch");
        }
    } else {
        res.status(400).send("invalid input");
    }
}