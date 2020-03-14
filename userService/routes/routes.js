const userController = require("../controllers/userController.js");


module.exports = (app) => {
    // manage users - returns one ore more users - creates new users.
    app.route('/users')
    .get(userController.getRangeOfUsers) //gets batch for experiment 3
    .post(userController.getUsers) // gets users from a list
    app.route('/user')
    .get(userController.getUser) // gets one user
}