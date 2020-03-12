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