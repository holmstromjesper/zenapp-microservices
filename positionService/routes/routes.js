const positionController = require("../controllers/positionController.js")

module.exports = (app) => {
    app.route('/positions')
    .get(positionController.getPosition)
    .post(positionController.updatePosition)
  };