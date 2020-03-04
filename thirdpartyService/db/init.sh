#!/bin/sh

bash -c "/wait-for-it.sh 127.0.0.1:3306 -t 20 -- mongoimport -v --db database --collection thirdpartyservicemodels --type json --file /serviceSeeds.json --jsonArray" &
exec mongod

