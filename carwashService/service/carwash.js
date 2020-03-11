
const serviceLong = 15.549027;
const servicesLat = 58.391620;


exports.handle = async (position, settings) => {
    let userlong = position.long;
    let userlat = position.lat;
    console.log(settings)
    let queuetimeSetting = settings.settings.queuetime;
    let distance = settings.settings.distance;
    console.log("queuetime in carwash", queuetimeSetting)
    console.log("distancesetting in carwash", distance)
    console.log("userlat in carwash", userlat)
    console.log("userlong in carwash", userlong)
    if(getDistanceFromLatLonInKm(servicesLat, serviceLong, userlat, userlong) < distance){
        const queuetime = 5;

        if(Number(queuetime) < queuetimeSetting){
            return {
                serviceID: settings.serviceID,
                queueTime: queuetime,
                location: "carwash1",
                message: "Time for carwash" ,
                alert: true
            } 
        } else {
            return {
                serviceID: settings.serviceID,
                queueTime: queuetime,
                location: "Biltvätt1",
                message: "Queuetime to long" ,
                alert: false
            }   
        }
    }
    else{
        return {
            serviceID: settings.serviceID,
            queueTime: null,
            location: null,
            message: "outside distance of interest" ,
            alert: false
        };
    }
}


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
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
    console.log("DISTANCE", d)
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }