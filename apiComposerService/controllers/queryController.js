const userComposer = require('../composer/userComposer')


exports.getUser = async (req,res) => {
    const userID = req.query.userID;
    console.log("userid in controller",userID)
    const userObject = await userComposer.getUserQuery(userID);

    if(userObject){
        res.status(200).send(JSON.stringify(userObject));
    }else{
        res.status(400).send("could not get userdata")
    }
}
exports.getUsersExperiment3 = async (req, res) => {
    const limit = req.query.limit;
    const response = await userComposer.getUsersExperiment3Query(limit)
    console.log("NUMBER OF RESPONSES", response.length)
    if(response){
        res.status(200).send(JSON.stringify(response));
    }else{
        res.status(400).send("could not get userdata")
    }
}