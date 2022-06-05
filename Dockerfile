FROM node:17-alpine AS builder
WORKDIR /usr/src/frontend

COPY . .

#RUN apk add --update python3-dev build-base # for gyp
RUN npm ci

ENTRYPOINT [ "npm", "start" ]

