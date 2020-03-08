#!/bin/sh

mongoimport -v --db database --collection usersubscriptionmodels --type json --file dataseed/userSubSeed.json --jsonArray


