FROM node:10.19.0-alpine

WORKDIR ./app
# setting image(working) directory.
# if it doesn't exist, Docker will create dir.

COPY package*.json ./

RUN npm install --only=production

COPY ./index.js ./src
# copy microservice source code to ./app./src

COPY ./videos ./videos

CMD npm start
# start microservice

