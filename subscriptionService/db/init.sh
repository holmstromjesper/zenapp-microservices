#!/bin/sh

bash -c "/wait-for-it.sh 127.0.0.1:3306 -t 20 -- mongoimport -v --db database --collection usermodels --type json --file /initUser.json --jsonArray" &
exec mongod

