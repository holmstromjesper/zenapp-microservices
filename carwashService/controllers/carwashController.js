const carwash = require('../service/carwash')
exports.checkService = async (req,res) => {
    const settings = req.body.settings
    let query = await carwash.handle(settings)
    res.status(200).send(JSON.stringify(query));
}






