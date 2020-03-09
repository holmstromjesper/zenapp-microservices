const carwashController = require("../controllers/carwashController");


module.exports = (app) => {
//returnes one or several services
  app.route('/handle')
    .post(carwashController.checkService); //works
}