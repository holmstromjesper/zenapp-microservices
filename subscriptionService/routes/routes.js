const userSubscriptionController = require("../controllers/subscriptionController.js");
const path = require('path');


module.exports = (app) => {
    console.log("usersubscriptionsCalled")
    app.route('/subscription')
    .get(userSubscriptionController.getUserSubscription);

    app.route('/subscriptions')
    .get(userSubscriptionController.getRangeOfUsersSubscriptions)
    .post(userSubscriptionController.subscribe);
}