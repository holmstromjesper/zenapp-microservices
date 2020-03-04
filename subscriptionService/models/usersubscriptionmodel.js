const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSubscriptionModelSchema = new Schema({
    userID: {
        type: Number,
        unique: true,
        required: true
    },
    subscriptions: [
        {
            _id: false,
            serviceID: Number,
            settings: Object
        }
    ]
});
var UserSubscriptionModel = mongoose.model('UserSubscriptionModel', UserSubscriptionModelSchema);

module.exports = UserSubscriptionModel;