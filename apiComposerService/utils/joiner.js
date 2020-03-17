const _ = require('lodash-joins')

exports.sortmergeJoin = async (objects) => {
    userObject = objects[0];
    positionObject = objects[1];
    subscriptionObject = objects[2];
    var useraccessor =  (obj)=> {
        return obj['userID'];
    };
    const a = _.sortedMergeInnerJoin(userObject, useraccessor,positionObject, useraccessor);
    const b = _.sortedMergeInnerJoin(a, useraccessor,subscriptionObject, useraccessor);
    return b;
}