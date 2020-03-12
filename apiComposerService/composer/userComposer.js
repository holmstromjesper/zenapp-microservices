const api = require('../api/userAPI')
const joiner = require('../utils/joiner')

const USERSERVICE_URL="http://userservice:80/user"
const POSITIONSERVICE_URL="http://positionservice:80/position"
const SUBSCRIPTIONSSERVICE_URL='http://subscriptionservice:80/subscriptions'



exports.getUserQuery = async (userID) => {

    const userObject =  api.get(USERSERVICE_URL, userID)
    const positionObject =  api.get(POSITIONSERVICE_URL, userID)
    const subscriptionObject =  api.get(SUBSCRIPTIONSSERVICE_URL, userID)
    const responses = await Promise.all([userObject,positionObject,subscriptionObject])
    // const responses = await Promise.all([userObject, positionObject])
    console.log("responses back in usercomposer",responses)

    if(!responses.includes(null) && responses.length == 3){
        console.log("SÄTT IHOP")
        const merged = await joiner.sortmergeJoin(responses)
        return merged;
    } else {
        console.log("SÄTT INTE I IHOP")
        return null;
    }
}