const mongoDBHandler = require('../dbHandlers/mongodbHandler');
const api = require('../api/api')

exports.getAllServices = async (req,res) => {
    console.log("getALLservices")
    let query = await mongoDBHandler.getAllServices();
    res.send(query);
}

exports.getServices = async (req,res) => {
    console.log("getservices")
    console.log(req.body.serviceIDs)
    if(req.body.serviceIDs){
        const serviceIDs = req.body.serviceIDs;

        let query = await mongoDBHandler.getServices(serviceIDs);

        if(query){
            res.status(200).send(query);
        } else {
            res.status(400).send("no results were found");
        }
    } else {
        res.status(200).send("no serviceIDs provided");
    }
    
}

exports.addService = async (req, res) => {
    mongoDBHandler.addNewService(req.body).then(response => {
        if(response){
            res.status(200).send("added service:" + response )
        }
        else{
            res.status(400).send("Falied to save")
        }
    })
}
exports.changeServiceStatus = async (req, res) =>{
    response = await mongoDBHandler.setServiceStatus(req.body)
    console.log(response)
    res.send("changed status of service");
}



exports.checkSubscriptions = async (req, res) => {
    const userSubscriptions = req.body.subscriptions;
    const position = req.body.position
    const extendedSubscriptions = await mongoDBHandler.getServiceUrls(userSubscriptions)
    console.log("extendedSubscriptions", extendedSubscriptions)
    const serviceResults = await api.callServices(extendedSubscriptions, position);



    
    res.send(serviceResults);

}




