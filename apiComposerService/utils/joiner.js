const _ = require('lodash-joins')

exports.sortmergeJoin = async (objects) => {
    console.log("performing join")
    userObject = objects[0];
    console.log(userObject)
    positionObject = objects[1];
    console.log(positionObject)
    subscriptionObject = objects[2];
    var useraccessor =  (obj)=> {
        return obj['userID'];
    };
    const a = _.sortedMergeInnerJoin(userObject, useraccessor,positionObject, useraccessor);
    const b = _.sortedMergeInnerJoin(a, useraccessor,subscriptionObject, useraccessor);
    console.log(b)
    return b;
}