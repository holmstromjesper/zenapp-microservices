const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUsers = async (req, res) => {
    const userIDs = req.body.userIDs;
    cons
    if(!userIDs.some(isNaN)){
        let users = await mongoDBHandler.findUser(userIDs);
        console.log(users)
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
    console.log(req.query)
    console.log(req.query.userID)
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