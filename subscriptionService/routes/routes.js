const userSubscriptionController = require("../controllers/subscriptionController.js");
const path = require('path');


module.exports = (app) => {
    console.log("usersubscriptionsCalled")
    
    app.route('/subscriptions')
    .get(userSubscriptionController.getUserSubscriptions)
    .post(userSubscriptionController.subscribe);
}