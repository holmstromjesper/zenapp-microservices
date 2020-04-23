
const serviceLong = 15.549027;
const servicesLat = 58.391620;


exports.handle = async (settings) => {
 
    let queuetimeSetting = settings.settings.queuetime;

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
    



