const queryController = require('../controllers/queryController')

module.exports = (app) => {
//returnes one or several services
  app.route('/user')
    .get(queryController.getUser);
}