var fs = require('fs')
var jsonArray = [];


// EXPERIMENT 1 
for(let i = 0; i<10000; i++){
    let randomStatus = Math.floor(Math.random() * (4))
    var usersSubscription = {
        userID: i,
        subscriptions: [
            { serviceID: i%5,
              settings: {
                queuetime: ((i%5)+1)*4,
                distance: ((i%5)+1)
              }  
            },
            { serviceID: (i+1)%5,
                settings: {
                  queuetime: ((i%6)+randomStatus)*3,
                  distance: ((i%6)+2)
                }  
              },
              { serviceID: (i+2)%5,
                settings: {
                  queuetime: ((i%7)+randomStatus)*3,
                  distance: ((i%7)+3)
                }  
              },
        ],
        experiment: 1
    }
    jsonArray.push(usersSubscription);
}
// EXPERIMENT 2
for(let i = 10000; i<20000; i++){
  let randomStatus = Math.floor(Math.random() * (4))
  var usersSubscription = {
      userID: i,
      subscriptions: [
          { serviceID: i%5,
            settings: {
              queuetime: ((i%5)+1)*4,
              distance: ((i%5)+1)
            }  
          },
          { serviceID: (i+1)%5,
              settings: {
                queuetime: ((i%6)+randomStatus)*3,
                distance: ((i%6)+2)
              }  
            },
            { serviceID: (i+2)%5,
              settings: {
                queuetime: ((i%7)+randomStatus)*3,
                distance: ((i%7)+3)
              }  
            },
      ],
      experiment: 2
  }
  jsonArray.push(usersSubscription);
}
// EXPERIMENT 3
for(let i = 20000; i<30000; i++){
  let randomStatus = Math.floor(Math.random() * (4))
  var usersSubscription = {
      userID: i,
      subscriptions: [
          { serviceID: i%5,
            settings: {
              queuetime: ((i%5)+1)*4,
              distance: ((i%5)+1)
            }  
          },
          { serviceID: (i+1)%5,
              settings: {
                queuetime: ((i%6)+randomStatus)*3,
                distance: ((i%6)+2)
              }  
            },
            { serviceID: (i+2)%5,
              settings: {
                queuetime: ((i%7)+randomStatus)*3,
                distance: ((i%7)+3)
              }  
            },
      ],
      experiment: 3
  }
  jsonArray.push(usersSubscription);
}
fs.writeFile('userSubSeed.json', JSON.stringify(jsonArray), 'utf8', () => console.log('wrote to: userSubSeed' ));

