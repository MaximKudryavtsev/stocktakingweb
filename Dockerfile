FROM node:8-alpine
EXPOSE 8080

COPY ./ /usr/src/app
WORKDIR /usr/src/app

RUN npm i

CMD npm run start
