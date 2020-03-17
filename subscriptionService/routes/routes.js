const userSubscriptionController = require("../controllers/subscriptionController.js");
const path = require('path');


module.exports = (app) => {
    app.route('/subscription')
    .get(userSubscriptionController.getUserSubscription) //gets one users subscriptions
    .post(userSubscriptionController.subscribe)
    .delete(userSubscriptionController.unsubscribe)

    app.route('/subscriptions')
    .get(userSubscriptionController.getRangeOfUsersSubscriptions) //gets subscriptionss for a batch of users
    .post(userSubscriptionController.getUsersSubscriptions); // gets subscriptions from a specfic batch of userIDs
}