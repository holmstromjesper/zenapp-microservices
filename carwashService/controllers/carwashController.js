const carwash = require('../service/carwash')
exports.checkService = async (req,res) => {
    // what do it take i
    console.log("position",req.body.position);
    console.log("settings",req.body.settings);

    const position = req.body.position

    const settings = req.body.settings.settings
    let query = await carwash.handle(position, settings)
    res.send(JSON.stringify(query));
}






