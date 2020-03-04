const mongoDBHandler = require('../dbHandlers/mongodbHandler');

//services
const thirdpartyservice1 = require('./thirdPartyServices/thirdPartyService1'); 


exports.getAllServices = async (req,res) => {
    if(req.query.serviceList == null || req.query.serviceList === "[]"){
        let query = await mongoDBHandler.getServices();
    }
    else{
        let query = await mongoDBHandler.getServices(JSON.parse(req.query.serviceList));

    }
    res.send(query);
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
    let userSubscriptions = req.body.subscription;
    let position = req.body.position;
  
    const responseArray = await userSubscriptions.map( async subscription => {
        if(subscription.id == 0){
            //call service 0
        }
        if(subscription.id == 1){
            //call service 1
            return await thirdpartyservice1.handle(position, subscription.settings).then(response => {
                return response;
            });
        }
        if(subscription.id == 2){
            //call service 2
            return {
                event: "det regnar",
                fan: true
            }
        }
        if(subscription.id == 3){
            //call service 3
        }
        if(subscription.id == 4){
            //call service 4
        }
        else{
            return null;
        }

    });

    const response = await Promise.all(responseArray)
    console.log("responseArr", response);
    //loop and send in posisiton. 
    res.send(response);

    //return notificaion if hit. 
}



