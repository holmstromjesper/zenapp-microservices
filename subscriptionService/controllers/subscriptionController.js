const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUserSubscriptions = async (req, res) => {
    console.log(req.query.userID)
    const subscriptions = await mongoDBHandler.getUserSubscriptions(req.query.userID);
    if(subscriptions){
        res.status(200).send(JSON.stringify(subscriptions));
    }else{
        res.status(400).send("could not find user subscriptions");
    }
}

exports.subscribe = async (req,res) => {
    let userID = req.body.userID;
    let serviceObject = req.body.serviceobject;
    console.log("userID",userID)
    console.log("serviceObject",serviceObject)

    mongoDBHandler.subscribe(userID, serviceObject).then(response => {
        console.log("response: ", response)
        if(response){
            res.status(200).send("Subscribes to service " + serviceObject);
        }
        else{
            res.status(400).send("FAILED subscribed to service");
        }
    })
  
};