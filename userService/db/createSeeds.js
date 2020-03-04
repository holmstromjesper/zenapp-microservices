var fs = require('fs')
var jsonArray = [];

for(let i = 0; i<10000; i++){
    user = {
        "userID": i,
        "name": {
            "firstname": 'user' + i, 
            "lastname": "lastnameson" + i,
        },
        "userLevel": i%4,
        "email": "user.lastnameson" + i+ "@email.com",
        "password": "123"+i,
    }
    jsonArray.push(user);
}
fs.writeFile('initUser.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: initUser' ));

