FROM node:lts-alpine

WORKDIR /usr/app

RUN npm install -g http-server

COPY package*.json /usr/app

RUN npm install

COPY . /usr/app

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]