FROM node:18-slim

WORKDIR /usr/code

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

RUN echo 'alias ng="npx ng"' >> ~/.bashrc

COPY . .

RUN mkdir -p dist
