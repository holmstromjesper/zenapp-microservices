const api = require('../api/userAPI')
const joiner = require('../utils/joiner')

// let USERSERVICE_URL="https://zenapp-userservice.azurewebsites.net/user"
// let POSITIONSERVICE_URL="https://zenapp-positionservice.azurewebsites.net/position"
// let SUBSCRIPTIONSSERVICE_URL="https://zenapp-subscriptionservice.azurewebsites.net/subscription"
// let USERSERVICE_EXPERIMENT3_URL = "https://zenapp-userservice.azurewebsites.net/users"
// let POSITION_EXPERIMENT3_URL = "https://zenapp-positionservice.azurewebsites.net/positions"
// let SUBSCRIPTIONSERVICE_EXPERIMENT3_URL = "https://zenapp-subscriptionservice.azurewebsites.net/subscriptions"
let USERSERVICE_URL="http://userservice:80/user"
let POSITIONSERVICE_URL="http://positionservice:80/position"
let SUBSCRIPTIONSSERVICE_URL="http://subscriptionservice:80/subscription"
let USERSERVICE_EXPERIMENT3_URL = "http://userservice:80/users"
let POSITION_EXPERIMENT3_URL = "http://positionservice:80/positions"
let SUBSCRIPTIONSERVICE_EXPERIMENT3_URL = "http://subscriptionservice:80/subscriptions"


exports.getUserQuery = async (userID) => {
  const options = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',

      },
      qs: { 'userID': userID.toString() },
      json: true,
    };
 
    try {
      const userObject =  api.get(USERSERVICE_URL, options)
      const positionObject =  api.get(POSITIONSERVICE_URL, options)
      const subscriptionObject =  api.get(SUBSCRIPTIONSSERVICE_URL, options)

      const responses = await Promise.all([userObject,positionObject,subscriptionObject])
      let starttime = new Date().valueOf()
      let merged = await joiner.sortmergeJoin(responses)
      let endtime = new Date().valueOf()
      return {
        jointime: (((endtime - starttime))),
        response: merged
        }
    } catch (error) {
        console.log("error in fetches", error)
        return null
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
    try {
      const userObject =  api.get(USERSERVICE_EXPERIMENT3_URL, options)
      const positionObject =  api.get(POSITION_EXPERIMENT3_URL, options)
      const subscriptionObject =  api.get(SUBSCRIPTIONSERVICE_EXPERIMENT3_URL, options)
      const responses = await Promise.all([userObject,positionObject,subscriptionObject])
      let starttime = new Date().valueOf()
      const merged = await joiner.sortmergeJoin(responses)
      let endtime = new Date().valueOf()

      return {
        jointime: (((endtime - starttime))),
        response: merged
        }
    } catch (error) {
      console.log("error in fetches", error)
      return null
    }
}

exports.updateurls = async (urls) =>{
  USERSERVICE_URL= urls.USERSERVICE_URL
  POSITIONSERVICE_URL= urls.POSITIONSERVICE_URL
  SUBSCRIPTIONSSERVICE_URL= urls.SUBSCRIPTIONSSERVICE_URL
  USERSERVICE_EXPERIMENT3_URL = urls.USERSERVICE_EXPERIMENT3_URL
  POSITION_EXPERIMENT3_URL = urls.POSITION_EXPERIMENT3_URL
  SUBSCRIPTIONSERVICE_EXPERIMENT3_URL = urls.SUBSCRIPTIONSERVICE_EXPERIMENT3_URL
}