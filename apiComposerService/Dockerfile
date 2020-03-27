FROM node:latest

# set working directory
RUN mkdir /src
WORKDIR /src

# install app dependencies
ADD package.json /src/package.json
ADD . /src/app
RUN npm install

# start app
CMD npm start
EXPOSE 80