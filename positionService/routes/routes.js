const positionController = require("../controllers/positionController.js")

module.exports = (app) => {

    app.route('/position')
    .get(positionController.getPosition)
    .post(positionController.updatePosition)

    app.route('/positions')
    .post(positionController.getPositions)
  };