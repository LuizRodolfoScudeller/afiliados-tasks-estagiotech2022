FROM node:16 as build

WORKDIR /dist

COPY . ./

RUN yarn && yarn build

FROM node:16-alpine

COPY --from=build /dist/server server
COPY --from=build /dist/dist dist

RUN yarn add express@^4.18.1

EXPOSE 8001

CMD ['node', 'server/index.js']