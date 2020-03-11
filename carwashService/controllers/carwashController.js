const carwash = require('../service/carwash')
exports.checkService = async (req,res) => {
    // what do it take i
    console.log("position",req.body.position);
    console.log("settings",req.body.settings);

    const position = req.body.position

    const settings = req.body.settings[0]
    console.log(settings)
    let query = await carwash.handle(position, settings)
    res.status(200).send(JSON.stringify(query));
}






