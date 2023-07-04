### Build
FROM node:16-alpine AS build
## Create app directory
WORKDIR /usr/src/app
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm ci
## Bundle app source
COPY . .
RUN npm install
RUN npm run build
### Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=build  /usr/src/app/dist/rss-frontend/ /usr/share/nginx/html