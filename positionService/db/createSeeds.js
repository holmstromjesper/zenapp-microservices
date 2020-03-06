var fs = require('fs')
var jsonArray = [];
// EXPERIMENT 1
for(let i = 1; i<10000; i++){
    let randomStatus = Math.floor(Math.random() * (4))
    var userPosition = {
        userID: i,
        position: {
          lat: 58.391620,
          long: 15.549027 + i % 3,
      },
      experiment: 1
    }
    jsonArray.push(userPosition);
}
// EXPERIMENT 2
for(let i = 1; i<10000; i++){
  let randomStatus = Math.floor(Math.random() * (4))
  var userPosition = {
      userID: i,
      position: {
        lat: 58.391620,
        long: 15.549027 + i % 3,
    },
    experiment: 2
  }
  jsonArray.push(userPosition);
}
// EXPERIMENT 3
for(let i = 1; i<10000; i++){
  let randomStatus = Math.floor(Math.random() * (4))
  var userPosition = {
      userID: i,
      position: {
        lat: 58.391620,
        long: 15.549027 + i % 3,
    },
    experiment: 3
  }
  
  jsonArray.push(userPosition);
}
fs.writeFile('userPosSeed.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: userPosSeed' ));

