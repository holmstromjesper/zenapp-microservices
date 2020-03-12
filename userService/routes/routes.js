const userController = require("../controllers/userController.js");


module.exports = (app) => {
    // manage users - returns one ore more users - creates new users.
    app.route('/users')
    .post(userController.getUsers)
    app.route('/user')
    .get(userController.getUser)
}