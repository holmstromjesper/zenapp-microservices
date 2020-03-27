const queryController = require('../controllers/queryController')
const gatewayController = require('../controllers/gatewayController')


module.exports = (app) => {
//returnes one or several services
  app.route('/usercompose')
    .get(queryController.getUser);
  app.route('/userscompose')
    .get(queryController.getUsersExperiment3)
  app.route('/serviceurls')
    .post(queryController.updateServiceUrls)
  app.route('/user')
    .get(gatewayController.getUser)
  app.route('/subscription')
    .get(gatewayController.getSubscription)
  app.route('/service')
    .get(gatewayController.getService)
  app.route('/position')
    .get(gatewayController.getPosition)
  app.route('/checksubscriptions')
    .post(gatewayController.checkSubscription)
}