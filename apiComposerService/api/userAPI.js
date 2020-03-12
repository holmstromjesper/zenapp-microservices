const reqPromise = require('request-promise')


exports.get = async (url, options) =>{
   

    try {
        const response = await reqPromise.get(url, options)
        return Promise.resolve(response)
    } catch (error) {
        Promise.resolve(null)
    }    
}