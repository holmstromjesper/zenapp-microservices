const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUsers = async (req, res) => {
    const userIDs = req.body.userIDs;
    if(!userIDs.some(isNaN)){
        let users = await mongoDBHandler.findUser(userIDs);
        if(users){
            res.status(200).send(JSON.stringify(users));
        }
        else{
            res.status(400).send("Could not find users");
        }
    } else {
        return res.status(400).send("invalid userid input");

    }
}
exports.getUser = async (req,res) => {
    const userID = req.query.userID
    if(!isNaN(userID)){
        let response = await mongoDBHandler.getUser(userID);
        if(response){
            res.status(200).send(JSON.stringify(response));
        }
        else{
            res.status(400).send("user not found");
        }
    } else {
        res.status(400).send("invalid userID")
    }
};

//this is the experiment3 function which returns a batch of users to be joined in api composer
exports.getRangeOfUsers = async (req,res) => {
    let userLimit = parseInt(req.query.limit);
    let response = await mongoDBHandler.getRange(userLimit);
    if(response){
        res.status(200).send(JSON.stringify(response));
    }
    else{
        res.status(400).send("could not fetch batch");
    }
}

