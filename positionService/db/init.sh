#!/bin/sh

mongoimport -v --db database --collection userpositionmodels --type json --file dataseed/userposseed.json --jsonArray


