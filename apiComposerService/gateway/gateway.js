let USERSERVICE_URL="https://zenapp-userservice.azurewebsites.net/user"
let POSITIONSERVICE_URL="https://zenapp-positionservice.azurewebsites.net/position"
let SUBSCRIPTIONSSERVICE_URL="https://zenapp-subscriptionservice.azurewebsites.net/subscription"
let THIRDPARTYSERVICE_URL_CHECK="https://zenapp-thirdpartyservice.azurewebsites.net/checksubscriptions"
let THIRDPARTYSERVICE_URL_GETSERVICE ="https://zenapp-thirdpartyservice.azurewebsites.net/service"

const api = require('../api/userAPI')

exports.getUserInfo = async (userID) => {
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
  
        },
        qs: { 'userID': userID.toString() },
        json: true,
      };
    const userObject =  await api.get(USERSERVICE_URL, options)
    return userObject;
}
exports.getUserPosition = async (userID) => {
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        qs: { 'userID': userID.toString() },
        json: true,
      };

    const userPosition =  await api.get(POSITIONSERVICE_URL, options)
    return userPosition
}
exports.getUserSubscription = async (userID) => {
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        qs: { 'userID': userID.toString() },
        json: true,
      };
    const userSubscriptions =  await api.get(SUBSCRIPTIONSSERVICE_URL, options)
    return userSubscriptions
}

exports.getService = async (serviceID) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    qs: { 'serviceID': serviceID.toString() },
    json: true,
  };
  const service =  await api.get(THIRDPARTYSERVICE_URL_GETSERVICE, options)
  return service

}

exports.checkSubscription = async (subscriptionObject) => {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        uri:THIRDPARTYSERVICE_URL_CHECK, 
        body: subscriptionObject,
        json: true,
      };
      const subscriptionStatus = await api.post(options)
      return subscriptionStatus
}