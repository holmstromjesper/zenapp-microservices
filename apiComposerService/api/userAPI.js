const reqPromise = require('request-promise')


exports.get = async (url, options) =>{
    try {
        const response = await reqPromise.get(url, options)
        return Promise.resolve(response)
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message)
    }    
}

exports.post = async (options) =>{
    try {
        const response = await reqPromise(options)
        return Promise.resolve(response)
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message)
    }    
}