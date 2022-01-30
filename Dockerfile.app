FROM node:17
WORKDIR /app

COPY ./src/ ./src
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json


RUN npm install && npm run compile
RUN cp -r node_modules dist/node_modules && cp package-lock.json dist/package-lock.json

RUN apt-get update && apt install zip
RUN zip -r function.zip ./dist
