const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js');



const startusedafter = process.memoryUsage().heapUsed / 1024 / 1024;
// const subscriptionsobject = require('../subscriptionService/db/mongo_data/userSubSeed.json')
const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);


console.log("DONE");