const fetch = require('node-fetch');
const headers = {"Content-Type": "application/json"}


exports.callServices = async (subscriptions, position) => {
    let responseArray = []
    console.log(subscriptions)

    responseArray = subscriptions.map(async subscription => {
        if(subscription.serviceID != 0){
            subscription.response = {
                queueTime: 1000,
                location: "NA",
                message: "Queue time to long" ,
                alert: false
                }
                return subscription;
            }
        else {
            console.log("serviceURL", subscription.serviceURL)
            let data = {position: position, settings: subscriptions}
            console.log('data:', data)
            fetch(subscription.serviceURL +"/handle", {
                method: 'post', 
                headers, 
                body:JSON.stringify(data)
            }).then(response => {
                return response.json()
            }).then(response =>{
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
        });
}