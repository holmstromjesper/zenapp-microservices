const positionController = require("../controllers/positionController.js")

module.exports = (app) => {

    app.route('/position')
    .get(positionController.getPosition)
    .post(positionController.updatePosition)

    app.route('/positions')
    .get(positionController.getRangeOfUsersPositions)
    .post(positionController.getPositions);
  };