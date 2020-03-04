const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getPosition = async (req, res) => {
    console.log(" in get position")
    response = await mongoDBHandler.getPosition(req.query.userID)
    if(response){
        res.status(200).send(response);
    }
    else{
        res.status(400).send("Could not find User");
    }
};

exports.updatePosition = async (req,res) => {
    response = await mongoDBHandler.updatePosition(req.body.userPosition, req.body.userID);
    if(response){
        res.status(200).send(response);
    }
    else{
        res.status(400).sen("Could not update position");
    }
};