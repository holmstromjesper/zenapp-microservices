const reqPromise = require('request-promise')


exports.get = async (url, userID) =>{
    const options = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',

        },
        qs: { 'userID': userID.toString() },
        json: true,
      };

    try {
        const response = await reqPromise.get(url, options)
        return Promise.resolve(response)
    } catch (error) {
        Promise.resolve(null)
    }    
}