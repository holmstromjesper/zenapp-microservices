const mongoDBHandler = require('../dbHandlers/mongodbHandler');

exports.getUsers = async (req, res) => {
    console.log("HALLÅ")
    if(req.query.userIDs == null || req.query.userIDs === "[]"){
        let user = await mongoDBHandler.findUser();
    } 
    let user = await mongoDBHandler.findUser(JSON.parse(req.query.userIDs));

    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(400).send("Could not find user");
    }
}

exports.createUser = async (req,res) => {
    let response = await mongoDBHandler.createUser(req.body);
    if(response){
        res.status(200).send("user created");
    }
    else{
        res.status(400).send("user not created");
    }
};