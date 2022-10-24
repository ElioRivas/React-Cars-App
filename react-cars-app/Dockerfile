FROM node:16 AS production

ARG NODE_ENV = production
ENV NODE_ENV = ${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . .

RUN yarn build

CMD ["sh","-c","yarn typeorm migration:run && yarn start:prod"]
