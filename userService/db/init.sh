#!/bin/sh

mongoimport -v --db database --collection usermodels --type json --file dataseed/initUser.json --jsonArray


