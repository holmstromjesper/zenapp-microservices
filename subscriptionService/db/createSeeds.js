var fs = require('fs')
var jsonArray = [];



for(let i = 0; i<20; i++){
    let randomService = Math.floor(Math.random() * (197));
    let randomStatus = Math.floor(Math.random() * (4))
    user = {
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "position": {
            "lat": 58.391620,
            "long":15.549027 + i % 2,
        },
        "status": randomStatus,
        "id": i,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i,
        "subscriptions" : [ randomService, randomService + 1, randomService + 2  ]

    }
    jsonArray.push(user);
}
fs.writeFile('initUser.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: initUser' ));

