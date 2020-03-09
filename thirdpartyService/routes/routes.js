const thirdPartyServiceController = require("../controllers/thirdPartyController.js");


module.exports = (app) => {
//returnes one or several services
  app.route('/services')
    .get(thirdPartyServiceController.getAllServices) //works
    .post(thirdPartyServiceController.getServices); //works

  //manages one service
  app.route('/service')
    // .get(thirdPartyServiceController.getService) //use this for experiment
    .post(thirdPartyServiceController.addService) 
    .put(thirdPartyServiceController.changeServiceStatus);

  app.route('/checksubscriptions')
  .post(thirdPartyServiceController.checkSubscriptions)
}