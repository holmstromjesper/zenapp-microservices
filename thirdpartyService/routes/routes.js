const userController = require("../controllers/userController.js");


module.exports = (app) => {
    // manage users - returns one ore more users - creates new users.
    app.route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);
  }