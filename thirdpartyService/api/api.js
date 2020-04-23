const fetch = require('node-fetch');
const mongoDBHandler = require('../dbHandlers/mongodbHandler');

const headers = {"Content-Type": "application/json"}


exports.callServices = async (userSubscriptions, userPosition) => {
    let responseArray = []
    const subscriptions = await mongoDBHandler.getServiceUrls(userSubscriptions)

    responseArray = subscriptions.map(async subscription => {

        const servicePosition = await mongoDBHandler.getServicePosition(subscription.serviceID)
        if(!checkUserDistanceToService(userPosition, servicePosition.position, subscription.settings.distance)){
            return {
                serviceID: subscription.serviceID,
                queueTime: 1000,
                location: "NA",
                message: "user not within distance of interest" ,
                alert: false
                }
        }

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
            let data = {settings: subscription}
            console.log(subscription)
            return await fetch(subscription.serviceURL + "/handle", {
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
                    serviceID: subscription.serviceID,
                    queueTime: "NA",
                    location: "NA",
                    message: "NA" ,
                    alert: false
                } )
                
            })
        
        }
    });
    response = Promise.all(responseArray)
    return response
}
const checkUserDistanceToService = (userPosition, servicePosition, distance) => {
    if(getDistanceFromLatLonInKm(userPosition.lat, userPosition.long, servicePosition.lat, servicePosition.long) < distance){
        return true
    } 
    return false
}

const getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }