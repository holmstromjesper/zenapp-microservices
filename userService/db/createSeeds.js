var fs = require('fs')
var jsonArray = [];

// EXPERIMENT 1
for(let i = 0; i<10000; i++){
    user = {
        "userID": i,
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "userLevel": i%2,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i,
        "experiment": 1,
    }
    jsonArray.push(user);
}

// EXPERIMENT 2
for(let i = 0; i<10000; i++){
    user = {
        "userID": i,
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "userLevel": i%2,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i,
        "experiment": 2,
    }
    jsonArray.push(user);
}
// EXPERIMENT 3
for(let i = 0; i<10000; i++){
    user = {
        "userID": i,
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "userLevel": i%2,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i,
        "experiment": 3,
    }
    jsonArray.push(user);
}
fs.writeFile('initUser.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: initUser' ));

