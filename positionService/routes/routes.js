const positionController = require("../controllers/positionController.js")


const path = require('path');


module.exports = (app) => {
    // manage users - returns one ore more users - creates new users.
    app.route('/users')
    .get(positionController.getPosition)
  };