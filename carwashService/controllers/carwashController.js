const carwash = require('../service/carwash')
exports.checkService = async (req,res) => {
    const position = req.body.position
    const settings = req.body.settings[0]
    let query = await carwash.handle(position, settings)
    res.status(200).send(JSON.stringify(query));
}






