const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUserSubscriptions = async (req, res) => {
    const subscriptions = await mongoDBHandler.getUserSubscriptions(req.query.userID);
    if(subscriptions){
        res.status(200).send(subscriptions);
    }else{
        res.status(400).send("could not find user subscriptions");
    }
}

exports.subscribe = async (req,res) => {
    let serviceID = req.body.serviceID;
    let userID = req.body.userID;
    const response = await mongoDBHandler.subscribe(userID, serviceID)
    if(response){
        res.status(200).send("Subscribes to service " + serviceID);
    }
    else{
        res.status(400).send("FAILED subscribed to service");
    }
};