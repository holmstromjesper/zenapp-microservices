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
    const amount = req.query.amount;
    const experiment = req.query.experiment;
    console.log(req.query)
    console.log(experiment)
    console.log(amount)
    const response = await userComposer.getUsersExperiment3Query(amount, experiment)

    // if(userObject){
    //     res.status(200).send(JSON.stringify(userObject));
    // }else{
    //     res.status(400).send("could not get userdata")
    // }
}