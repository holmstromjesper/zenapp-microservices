var fs = require('fs');

const USER_OBJECT_LOWERBOUND = 0
const USER_OBJECT_HIGHERBOUND = 20000  
const SERVICE_LOWERBOUND = 1
const SERVICE_UPPERBOUND = 600




let usersArray = [];
let subscriptionsArray = [];
let positionsArray = [];
let serviceArray = [];

services =["carwash", "postal service", "hair studio"];
let isActive = 1;

//EXPERIMENT 1


for(let i = USER_OBJECT_LOWERBOUND; i<USER_OBJECT_HIGHERBOUND; i++){
    userObject = {
        "userID": i,
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "userLevel": i%2,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i
    }
    usersArray.push(userObject);

    let randomStatus = Math.floor(Math.random() * (4))
    subscriptionObject = {
        "userID": i,
        "subscriptions": [
            { "serviceID": i%5,
              "settings": {
                "queuetime": ((i%5)+1)*4,
                "distance": ((i%5)+1)
              }  
            },
            { "serviceID": (i+1)%5,
                "settings": {
                  "queuetime": ((i%6)+randomStatus)*3,
                  "distance": ((i%6)+2)
                }  
              },
              { "serviceID": (i+2)%5,
                "settings": {
                  "queuetime": ((i%7)+randomStatus)*3,
                  "distance": ((i%7)+3)
                }  
              },
        ]
    }
    subscriptionsArray.push(subscriptionObject);

    userPosition = {
        "userID": i,
        "position": {
          "lat": 58.391620,
          "long": 15.549027 + i % 3
      }
    }
    positionsArray.push(userPosition)
}

service = {
    "serviceID": 0,
    "serviceName": services[0] + 0,
    "serviceURL": "http://carwashservice:3000",
    "serviceType": services[0],
    "description": 'This is a ' + services[0],
    "position": {
        lat: 58.391620,
        long:15.549027
    },
    "active": isActive,
    "settings": ["queuetime", "distance"],
};

serviceArray.push(service)

for(let i = SERVICE_LOWERBOUND; i<SERVICE_UPPERBOUND; i++){
    if(i>99){s
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

    };
    serviceArray.push(service);
};



//WRITE TO ALL FILES
fs.writeFile('./userService/db/mongo_data/initUser.json', JSON.stringify(usersArray), 'utf8', (err) => {
    if(err) throw err;
    console.log('wrote to: initUser' )
});
fs.writeFile('./subscriptionService/db/mongo_data/userSubSeed.json', JSON.stringify(subscriptionsArray), 'utf8', (err) => {
    if(err) throw err;
    console.log('wrote to: userSubSeed')
});
fs.writeFile('./positionService/db/mongo_data/userposseed.json', JSON.stringify(positionsArray), 'utf8', (err) => {
    if(err) throw err;
    console.log('wrote to: userposseed')
});
fs.writeFile('./thirdpartyService/db/mongo_data/serviceSeeds.json', JSON.stringify(serviceArray), 'utf8', (err) => {
    if(err) throw err;
    console.log('wrote to: serviceseeds')
});




