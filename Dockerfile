FROM node:18-alpine3.16 AS development

WORKDIR /usr/code

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=dev

COPY . .

RUN npm run build

# ---------------------------

FROM node:18-alpine3.16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/code

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/code/dist ./dist
