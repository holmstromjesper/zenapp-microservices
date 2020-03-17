const api = require('../api/userAPI')
const joiner = require('../utils/joiner')

const USERSERVICE_URL="http://userservice:80/user"
const POSITIONSERVICE_URL="http://positionservice:80/position"
const SUBSCRIPTIONSSERVICE_URL="http://subscriptionservice:80/subscription"
const USERSERVICE_EXPERIMENT3_URL = "http://userservice:80/users"
const POSITION_EXPERIMENT3_URL = "http://positionservice:80/positions"
const SUBSCRIPTIONSERVICE_EXPERIMENT3_URL = "http://subscriptionservice:80/subscriptions"




exports.getUserQuery = async (userID) => {
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',

        },
        qs: { 'userID': userID.toString() },
        json: true,
      };
    const userObject =  api.get(USERSERVICE_URL, options)
    const positionObject =  api.get(POSITIONSERVICE_URL, options)
    const subscriptionObject =  api.get(SUBSCRIPTIONSSERVICE_URL, options)
    const responses = await Promise.all([userObject,positionObject,subscriptionObject])

    if(!responses.includes(null) && responses.length == 3){
        const merged = await joiner.sortmergeJoin(responses)
        return merged;
    } else {
        console.log("failed getting all data")
        return null;
    }
}

exports.getUsersExperiment3Query = async (limit) => {
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',

        },
        qs: { 'limit': limit.toString() },
        json: true,
      };
    const userObject =  api.get(USERSERVICE_EXPERIMENT3_URL, options)
    const positionObject =  api.get(POSITION_EXPERIMENT3_URL, options)
    const subscriptionObject =  api.get(SUBSCRIPTIONSERVICE_EXPERIMENT3_URL, options)
    const responses = await Promise.all([userObject,positionObject,subscriptionObject])
    
    if(!responses.includes(null) && responses.length == 3){
      const merged = await joiner.sortmergeJoin(responses)
      return merged;
  } else {
    console.log("failed getting all data")
    return null;
  }


}