const carwash = require('../service/carwash')
exports.checkService = async (req,res) => {
    const position = req.body.position
    const settings = req.body.settings
    let query = await carwash.handle(position, settings)
    res.status(200).send(JSON.stringify(query));
}






