const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UserPositionSchema = new Schema({
    userID: {
        type: Number,
        unique: true,
        required: true
    },
    position:{
        _id: false,
        timestamp: {
            type: Number,
            default: Date.now(),
            required:true
        },
        lat: {
            type: Number,
            default: null
        },
        long: {
            type: Number,
            default: null
        }
    }
});
var UserPositionModel = mongoose.model('UserPositionModel', UserPositionSchema);

module.exports = UserPositionModel;