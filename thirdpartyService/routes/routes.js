const thirdPartyServiceController = require("../controllers/thirdPartyController.js");


module.exports = (app) => {
//returnes one or several services
  app.route('/services')
    .get(thirdPartyServiceController.getAllServices) 
    .post(thirdPartyServiceController.getServices); 

  //manages one service
  app.route('/service')
    .get(thirdPartyServiceController.getService) 
    .post(thirdPartyServiceController.addService) 
    .put(thirdPartyServiceController.changeServiceStatus);

  app.route('/checksubscriptions')
  .post(thirdPartyServiceController.checkSubscriptions)
}