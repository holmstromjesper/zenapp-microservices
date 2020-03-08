#!/bin/sh

mongoimport -v --db database --collection thirdpartyservicemodels --type json --file dataseed/serviceSeeds.json --jsonArray


