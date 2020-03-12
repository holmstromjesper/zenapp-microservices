const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getPosition = async (req, res) => {
    console.log(req.query.userID)
    userID=req.query.userID
    response = await mongoDBHandler.getPosition(userID)
    if(response){
        res.status(200).send(JSON.stringify(response));
    }
    else{
        res.status(400).send("Could not find User");
    }
};

exports.updatePosition = async (req,res) => {
    const userPosition = req.body.userPosition;
    const userID = req.body.userID;
    console.log("update pos, userPosition", userPosition)
    console.log("update pos, userID")
    response = await mongoDBHandler.updatePosition(userPosition, userID);
    if(response){
        res.status(200).send(JSON.stringify(response));
    }
    else{
        res.status(400).sen("Could not update position");
    }
};

exports.getPositions = async (req,res) => {
    const userIDs = req.body.userIDs
    console.log("userIDS in controller", userIDs)
    console.log(typeof userIDs[0])
    response = await mongoDBHandler.getPositions(userIDs);
    if(response){
        res.status(200).send(JSON.stringify(response));
    }
    else{
        res.status(400).send("could not fetch users positions");
    }
};