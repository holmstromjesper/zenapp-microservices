const fetch = require('node-fetch');
const headers = {"Content-Type": "application/json"}


exports.callServices = async (subscriptions, position) => {
    let responseArray = []
    console.log(subscriptions)

    responseArray = subscriptions.map(async subscription => {
        if(subscription.serviceID != 0){
        console.log("service id was not 0");
            return Promise.resolve({
                serviceID: subscription.serviceID,
                queueTime: 1000,
                location: "NA",
                message: "Queue time to long" ,
                alert: false
                })
            }
        else {
            console.log("serviceURL", subscription.serviceURL)
            let data = {position: position, settings: subscriptions}
            console.log('data:', data)
            return await fetch(subscription.serviceURL +"/handle", {
                method: 'post', 
                headers, 
                body:JSON.stringify(data)
            }).then(response => {
                console.log("first response ",response)
                if(!response.ok){
                    throw "error in response"
                }else{
                    return response.json()
                } 
            }).then(response =>{
                console.log("response from ",response)
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
    console.log('response array',responseArray)
    response = Promise.all(responseArray)
    console.log(response)
    return response
}