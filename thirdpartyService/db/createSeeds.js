var fs = require('fs');
var jsonArray = [];
services =["carwash", "postal service", "hair studio"];
let isActive = 1;

service = {
    "serviceID": 0,
    "serviceName": services[0] + 0,
    "serviceUrl": "https://carwashservice:3000",
    "serviceType": services[0],
    "description": 'This is a ' + services[0],
    "position": {
        lat: 58.391620,
        long:15.549027
    },
    "active": isActive,
    "settings": ["queuetime", "distance"]
};
jsonArray.push(service);


for(let i = 1; i<200; i++){
    if(i>99){
        isActive=0
    }

    service = {
        "serviceID": i,
        "serviceName": services[i%3] + i,
        "serviceURL": "https://" + "mockservice" + i,
        "serviceType": services[i%3],
        "description": 'This is a ' + services[i%3],
        "position": {
            lat: 58.391620,
            long:15.549027 + (i % 2)
        },
        "active": isActive,
        "settings": ["queuetime", "distance"]
    };
    jsonArray.push(service);
};
fs.writeFile('serviceSeeds.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: serviceSeeds.json' ));

