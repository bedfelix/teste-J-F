FROM node:16-alpine as base

WORKDIR /app

COPY ./application /app

RUN apk update \
    && apk --no-cache --update add git python3 build-base bash udev ttf-freefont chromium \
    && rm -rf package-lock.json \
    && npm install package-lock-only \
    && npm install --silent \
    && npm cache clean --force


CMD ["npm", "run", "start"]
