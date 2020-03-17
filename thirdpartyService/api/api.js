const fetch = require('node-fetch');
const headers = {"Content-Type": "application/json"}


exports.callServices = async (subscriptions, position) => {
    let responseArray = []

    responseArray = subscriptions.map(async subscription => {
        if(subscription.serviceID != 0){
            return Promise.resolve({
                serviceID: subscription.serviceID,
                queueTime: 1000,
                location: "NA",
                message: "Queue time to long" ,
                alert: false
                })
            }
        else {
            let data = {position: position, settings: subscriptions}
            return await fetch(subscription.serviceURL +"/handle", {
                method: 'post', 
                headers, 
                body:JSON.stringify(data)
            }).then(response => {
                if(!response.ok){
                    throw new Error("error in response")
                }else{
                    return response.json()
                } 
            }).then(response =>{
                response.serviceID = subscription.serviceID;
                return response;
            }).catch(err => {
                console.log("error in checking service")
                return Promise.resolve({
                    message: "service not available",
                    serviceID: subscription.serviceID
                })
                
            })
        
        }
    });
    response = Promise.all(responseArray)
    return response
}