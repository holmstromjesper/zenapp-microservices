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

// experiment 1
for(let i = 1; i<200; i++){
    if(i>99){
        isActive=0
    }else{
        isActive=1
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
        "settings": ["queuetime", "distance"],
        "experiment": 1

    };
    jsonArray.push(service);
};
// experiment 2
for(let i = 200; i<400; i++){
    if(i>299){
        isActive=0
    }else{
        isActive=1
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
        "settings": ["queuetime", "distance"],
        "experiment": 2

    };
    jsonArray.push(service);
};
// experiment 3
for(let i = 400; i<600; i++){
    if(i>499){
        isActive=0
    }else{
        isActive=1
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
        "settings": ["queuetime", "distance"],
        "experiment": 3
    };
    jsonArray.push(service);
};

fs.writeFile('serviceSeeds.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: serviceSeeds.json' ));

