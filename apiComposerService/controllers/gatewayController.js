const gateway = require('../gateway/gateway')
exports.getUser = async (req, res) => {
    const userID = req.query.userID;
    if(!isNaN(userID)){
        const response = await gateway.getUserInfo(userID)
        if(response){
            res.status(200).send(JSON.stringify(response));
        }else{
            res.status(400).send("could not get userdata")
        }
    } else {
        res.status(400).send("invalid input")
    }
}

exports.getSubscription = async (req, res) => {
    const userID = req.query.userID;
    if(!isNaN(userID)){
        const response = await gateway.getUserSubscription(userID)
        if(response){
            res.status(200).send(JSON.stringify(response));
        }else{
            res.status(400).send("could not get subscriptiondata")
        }
    } else {
        res.status(400).send("invalid input")
    }
}
exports.getPosition = async (req, res) => {
    const userID = req.query.userID;
    if(!isNaN(userID)){
        const response = await gateway.getUserPosition(userID)
        if(response){
            res.status(200).send(JSON.stringify(response));
        }else{
            res.status(400).send("could not get positiondata")
        }
    } else {
        res.status(400).send("invalid input")
    }
}

exports.getService = async (req, res) => {
    const serviceID = req.query.serviceID;
    if(!isNaN(serviceID)){
        const response = await gateway.getService(serviceID)
        if(response){
            res.status(200).send(JSON.stringify(response));
        }else{
            res.status(400).send("could not get service information")
        }
    } else {
        res.status(400).send("invalid input")
    }
}


exports.checkSubscription = async (req, res) => {
    const subscriptionObject = req.body
    const response = await gateway.checkSubscription(subscriptionObject)
    if(response){
        res.status(200).send(JSON.stringify(response));
    }else{
        res.status(400).send("could not get positiondata")
    }

}