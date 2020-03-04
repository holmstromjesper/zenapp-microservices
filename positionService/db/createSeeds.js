var fs = require('fs')
var jsonArray = [];

for(let i = 1; i<10000; i++){
    let randomStatus = Math.floor(Math.random() * (4))
    var userPosition = {
        userID: i,
        position: {
          lat: 58.391620,
          long: 15.549027 + i % 3,
      },
    }
    jsonArray.push(userPosition);
}
fs.writeFile('userPosSeed.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: userPosSeed' ));

