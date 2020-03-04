var fs = require('fs');
var jsonArray = [];
services =["carwash", "postal service", "hair studio"];
let isActive = 1;
for(let i = 0; i<200; i++){
    if(i>99){
        isActive=0
    }

    service = {
        "serviceID": i,
        "serviceName": services[i%3] + i,
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

