FROM node:latest

# set working directory
RUN mkdir /src
WORKDIR /src

# install app dependencies
ADD package.json /src/package.json
RUN npm install

# start app
CMD ["npm", "start"]