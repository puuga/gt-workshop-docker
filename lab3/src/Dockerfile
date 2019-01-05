FROM node:10-alpine 

ENV APP_PORT=3000 \
    APP_DB_HOST="some where not localhost"

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" ,"start" ]