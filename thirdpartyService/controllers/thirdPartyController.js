const mongoDBHandler = require('../dbHandlers/mongodbHandler');
const api = require('../api/api')

exports.getAllServices = async (req,res) => {
    let query = await mongoDBHandler.getAllServices();
    res.send(query);
}

exports.getServices = async (req,res) => {
    if(!serviceIDs.some(isNaN)){
        const serviceIDs = req.body.serviceIDs;

        let query = await mongoDBHandler.getServices(serviceIDs);

        if(query){
            res.status(200).send(query);
        } else {
            res.status(400).send("no results were found");
        }
    } else {
        res.status(200).send("invalid input");
    }
}

exports.addService = async (req, res) => {
    const serviceObject = req.body
    const response = await mongoDBHandler.addNewService(serviceObject)
    if(response){
        res.status(200).send("added service:" + response )
    }
    else{
        res.status(400).send("Falied to save")
    }
}
exports.changeServiceStatus = async (req, res) =>{
    const response = await mongoDBHandler.setServiceStatus(req.body)
    if(response){
        res.status(200).send(`succesfully changed status to: ${req.body.active},of service ${req.body.serviceID}` )
    }
    else{
        res.status(400).send("Falied to save")
    }
}

exports.getService = async(req, res) =>{
    const serviceID = req.query.serviceID;
    if(!isNaN(serviceID)){
        let query = await mongoDBHandler.getService(serviceID);

        if(query){
            res.status(200).send(query);
        } else {
            res.status(400).send("no results were found");
        }
    } else {
        res.status(200).send("invalid input");
    }
    
}



exports.checkSubscriptions = async (req, res) => {
    const userSubscriptions = req.body.subscriptions;
    const position = req.body.position

    const extendedSubscriptions = await mongoDBHandler.getServiceUrls(userSubscriptions)
    const serviceResults = await api.callServices(extendedSubscriptions, position);
    
    res.send(serviceResults);

}




